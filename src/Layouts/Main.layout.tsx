import { Header, Sidebar } from '@/components';
import Blob from '@/components/Blob';
import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Box
            alignItems="center"
            bgColor="#000"
            display="flex"
            justifyContent="center"
            minH="100vh"
            overflowX="hidden"
            textAlign="center"
            w="100vw"
            flexDir="column"
        >
            <Header />
            {children}
            <Sidebar />
            <Blob bg="blue.500" left="0" zIndex="0" />
            <Blob bg="cyan.500" right="0" zIndex="0" />
        </Box>
    );
};

export default Layout;
