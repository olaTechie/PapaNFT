import theme from '@/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
            <ChakraProvider theme={theme}>
                <Toaster />
                <NextNProgress
                    color="#23D1B5"
                    options={{ showSpinner: false }}
                />
                <Component {...pageProps} />
            </ChakraProvider>
        </ThirdwebProvider>
    );
};

export default MyApp;
