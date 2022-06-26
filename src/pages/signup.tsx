import Layout from '@/Layouts/Main.layout';
import {
    Button,
    Flex,
    Spinner,
    Tag,
    Text,
    useBreakpoint,
} from '@chakra-ui/react';
import {
    useAddress,
    useCoinbaseWallet,
    useMetamask,
    useWalletConnect,
} from '@thirdweb-dev/react';
import axios from 'axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BiCopy } from 'react-icons/bi';

const Signup: NextPage = () => {
    const address = useAddress();
    const connectMetamask = useMetamask();
    const connectCoinbase = useCoinbaseWallet();
    const walletConnect = useWalletConnect();
    const [loading, setLoading] = useState(false);
    const breakpoint = useBreakpoint();
    console.log(breakpoint);

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
            setLoading(true);
            await axios.post('/api/add-to-allowlist', { address });
            toast.success('Added to allowlist');
            setLoading(false);
        } catch (e) {
            toast.error(e.response.data.error);
            setLoading(false);
        }
    };

    const truncateAddress = (address: string) => {
        return `${address.slice(0, 10)}...${address.slice(-10)}`;
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
                            <Text fontSize="md">
                                {breakpoint === 'base'
                                    ? truncateAddress(address)
                                    : address}
                            </Text>
                            <BiCopy size="1rem" />
                        </Tag>
                    </Flex>
                    <Button onClick={addToAllowlist}>
                        {loading ? <Spinner /> : 'Signup to allowlist'}
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

                    <Button {...buttonStyles} onClick={() => connectCoinbase()}>
                        <Image
                            src="/assets/coinbase.svg"
                            alt="Coinbase"
                            width={30}
                            height={30}
                        />
                        <Text fontSize="lg">Coinbase</Text>
                    </Button>

                    <Button {...buttonStyles} onClick={walletConnect}>
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
