import Layout from '@/Layouts/Main.layout';
import Link from 'next/link';
import { FC } from 'react';
import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Home: FC = () => {
    return (
        <Layout>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'space-between' }}
                align="center"
                zIndex={10}
                w="100vw"
                pl={{ base: '8', md: '32' }}
                pr={{ base: '8', md: '6' }}
                pt={{ base: '20', md: '0' }}
            >
                <Stack
                    align={{ base: 'center', md: 'flex-start' }}
                    spacing={6}
                    w="full"
                    maxW="lg"
                    justify="center"
                >
                    <Heading
                        textAlign="left"
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                        pt="20"
                    >
                        <Text as="span" color="white">
                            Welcome To The
                        </Text>
                        <br />
                        <Text color="blue.400" as="span">
                            PapaNFT Club.
                        </Text>
                    </Heading>
                    <Text
                        textAlign={{ base: 'center', md: 'left' }}
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color="gray.500"
                        align={{ base: 'center', md: 'left' }}
                    >
                        The PapaNFT CLUB is a collection of access passes that
                        you can purchase to get certain rewards! All NFTs are
                        erc 1155 tokens that can be minted by multiple people.
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                    >
                        <Link href="/signup">
                            <Button
                                rounded="full"
                                bg="transparent"
                                borderColor="messenger.400"
                                border="1px solid"
                                color="messenger.500"
                                _hover={{
                                    opacity: 0.8,
                                }}
                            >
                                Sign Up
                            </Button>
                        </Link>

                        <Link href="/mint">
                            <Button rounded="full">Mint Access Pass</Button>
                        </Link>
                    </Stack>
                </Stack>

                <Image
                    src="/assets/home.gif"
                    alt="Home image"
                    width={500}
                    height={500}
                    objectFit="contain"
                />
            </Stack>
        </Layout>
    );
};

export default Home;
