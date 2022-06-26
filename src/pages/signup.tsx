import Layout from '@/Layouts/Main.layout';
import { Button, Flex, Tag, Text } from '@chakra-ui/react';
import { useAddress, useMetamask } from '@thirdweb-dev/react';
import axios from 'axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';

const Signup: NextPage = () => {
    const address = useAddress();
    const connectMetamask = useMetamask();

    const buttonStyles = {
        backdropFilter: 'blur(16px) saturate(180%)',
        rounded: 'lg',
        h: '12',
        w: '72',
        gap: '4',
        borderRadius: '10px',
    };

    const addToAllowlist = async () => {
        if (!address) {
            toast.error('Please connect wallet');
            return;
        }
        try {
            await axios.post('/api/add-to-allowlist', { address });
            toast.success('Added to allowlist');
        } catch (e) {
            console.error(e);
            toast.error(e.response.data.error);
        }
    };

    return (
        <Layout>
            <Text
                as="h1"
                fontSize="4xl"
                color="white"
                fontWeight="bold"
                textAlign="center"
                zIndex="5"
            >
                Signup
            </Text>

            {address ? (
                <Flex flexDir="column" gap="5" mt="10" zIndex="5">
                    <Flex flexDir="column">
                        <Text align="left" color="white">
                            Address
                        </Text>
                        <Tag
                            cursor="pointer"
                            px="4"
                            py="2"
                            gap="2"
                            colorScheme="teal"
                            onClick={() => {
                                navigator.clipboard.writeText(address);
                                toast.success('Copied to clipboard');
                            }}
                        >
                            <Text fontSize="md">{address}</Text>
                            <BiCopy size="1rem" />
                        </Tag>
                    </Flex>
                    <Button onClick={addToAllowlist}>
                        Signup to allowlist
                    </Button>
                </Flex>
            ) : (
                <Flex flexDir="column" gap="5" mt="10" zIndex="5">
                    <Button {...buttonStyles} onClick={() => connectMetamask()}>
                        <Image
                            src="/assets/metamask.svg"
                            alt="Metamask"
                            width={30}
                            height={30}
                        />
                        <Text fontSize="lg">Metamask</Text>
                    </Button>

                    <Button {...buttonStyles}>
                        <Image
                            src="/assets/coinbase.svg"
                            alt="Coinbase"
                            width={30}
                            height={30}
                        />
                        <Text fontSize="lg">Coinbase</Text>
                    </Button>

                    <Button {...buttonStyles}>
                        <Image
                            src="/assets/walletconnect.svg"
                            alt="Wallet Connect"
                            width={30}
                            height={30}
                        />
                        <Text fontSize="lg">Wallet Connect</Text>
                    </Button>
                </Flex>
            )}
        </Layout>
    );
};

export default Signup;
