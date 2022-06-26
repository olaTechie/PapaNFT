import Layout from '@/Layouts/Main.layout';
import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <Layout>
            <Text as="h2" fontSize="5xl" color="white">
                Papa Fam hackathon
            </Text>
        </Layout>
    );
};

export default Home;
