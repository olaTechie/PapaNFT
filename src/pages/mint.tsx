import Layout from '@/Layouts/Main.layout';
import { Button, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

const Mint: NextPage = () => {
    return (
        <Layout>
            <Image
                src="/assets/access-pass.svg"
                alt="Access Pass"
                width={600}
                height={300}
                objectFit="contain"
            />
            <Text as="h2" fontSize="4xl" color="white">
                Access Pass
            </Text>
            <Text as="h3" fontSize="xl" color="white">
                This access pass is a erc 1155 token that you can use to access
                a surprise page.
            </Text>
            <Button mt="4">Mint</Button>
        </Layout>
    );
};

export default Mint;
