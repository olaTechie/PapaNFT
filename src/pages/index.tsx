import Layout from '@/Layouts/Main.layout';
import Link from 'next/link'
import { FC } from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';


const Home: FC = () => {
    return (
        <Layout>
            {/* <Text as="h2" fontSize="5xl" color="white">
                Papa Fam hackathon
            </Text> */}

            <Center>
<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                // bg: 'blue.400',
                zIndex: -1,
              }}>
              Welcome To The 
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              PapaNFT Club.
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          The PAPANFT CLUB is a private collection of NFTs—unique digital collectibles. The PAPANFT are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href="/signup">
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign Up
            </Button>
             </Link>

            <Link href="/mint">
            <Button rounded={'full'}>Mint Access Pass</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
                      <Image
                        src="/assets/home.gif"
                        alt="Home inage"
                        width={500}
                        height={500}
                    />
      </Flex>
    </Stack>
            </Center>
        </Layout>
    );
};

export default Home;
