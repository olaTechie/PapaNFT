import theme from '@/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/900.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
            <ChakraProvider theme={theme}>
                <NextSeo
                    title="PapaNFT"
                    canonical="https://papanft.vercel.app/"
                    openGraph={{
                        images: [
                            {
                                url: '/assets/og.png',
                                alt: 'PapaNFT',
                                height: 870,
                                width: 1440,
                            },
                        ],
                        site_name: 'PapaNFT',
                        url: 'https://papanft.vercel.app/',
                    }}
                />
                <Toaster />
                <NextNProgress
                    color="#053557"
                    options={{ showSpinner: false }}
                />
                <Component {...pageProps} />
            </ChakraProvider>
        </ThirdwebProvider>
    );
};

export default MyApp;
