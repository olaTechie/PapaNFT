import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';

const theme = extendTheme({
    colors: {
        body: '#060607',
    },
    fonts: {
        body: '"Inter", sans-serif',
        heading: '"Inter", sans-serif',
    },
    components: {
        Button,
    },
});

export default theme;
