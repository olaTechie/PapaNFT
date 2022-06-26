import Layout from '@/Layouts/Main.layout';
import { Button, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { useAddress, useEdition, useMetamask } from '@thirdweb-dev/react';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Surprise = () => {
    const edition = useEdition(process.env.NEXT_PUBLIC_EDITION_ADDRESS);
    const address = useAddress();
    const connectMetamask = useMetamask();
    const [loading, setLoading] = useState(false);
    const [hasNFT, setHasNFT] = useState(false);
    const [claimLoading, setClaimLoading] = useState(false);

    const buttonStyles = {
        backdropFilter: 'blur(16px) saturate(180%)',
        rounded: 'lg',
        h: '12',
        w: '72',
        gap: '2',
        borderRadius: '10px',
    };

    useEffect(() => {
        const doesOwn = async () => {
            setLoading(true);
            const owns = await edition.getOwned(address);
            setLoading(false);
            if (owns.length > 0) {
                setHasNFT(true);
            }
        };
        if (address) {
            doesOwn();
        }
    }, [address, edition]);

    if (!address) {
        return (
            <Layout>
                <Button {...buttonStyles} onClick={() => connectMetamask()}>
                    Connect Metamask
                </Button>
            </Layout>
        );
    }

    if (loading) {
        return (
            <Layout>
                <Spinner size="xl" color="white" />
            </Layout>
        );
    }

    if (!hasNFT) {
        return (
            <Layout>
                <Text color="white" fontSize="xl">
                    You don&apos;t have an Access Pass yet!
                </Text>
                <Text color="white" fontSize="xl">
                    Claim your access Pass{' '}
                    <Link href="/mint">
                        <Text
                            as="span"
                            color="blue.500"
                            cursor="pointer"
                            _hover={{ textDecoration: 'underline' }}
                        >
                            here
                        </Text>
                    </Link>
                </Text>
            </Layout>
        );
    }

    const mintTokens = async () => {
        setClaimLoading(true);
        try {
            await axios.post('/api/mint-tokens', {
                address,
            });
            toast.success('$MUTANT claimed successfully!');
            setClaimLoading(false);
        } catch (error) {
            toast.error('$MUTANT claim failed!');
            setClaimLoading(false);
        }
    };

    return (
        <Layout>
            <Flex flexDir="column" gap="10" px={['20', '0']}>
                <Text
                    color="white"
                    fontSize={['2xl', '4xl']}
                    fontWeight="semibold"
                >
                    Thank you for purchasing the access pass!
                </Text>
                <Image src="https://i.gifer.com/fxt5.gif" alt="surprise" />
                <Text
                    fontSize={['lg', '2xl']}
                    fontWeight="semibold"
                    color="white"
                >
                    Here is a gift for you, you can mint 100 $MUTANT tokens
                </Text>
                <Button onClick={() => mintTokens()}>
                    {claimLoading ? <Spinner /> : 'Claim 100 $MUTANT tokens'}
                </Button>
            </Flex>
        </Layout>
    );
};

export default Surprise;
