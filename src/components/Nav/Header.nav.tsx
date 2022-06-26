import { NavOption } from './Nav.components';
import navOptions from './navOptions';
import { Button, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import Link from 'next/link';

const Header: NextComponentType = () => {
    return (
        <Flex
            alignItems="center"
            h="14"
            justifyContent="center"
            borderBottom="1px solid"
            borderColor="rgba(255,255,255,0.2)"
            position="fixed"
            px={['4', '16']}
            textColor="white"
            top="0"
            w="full"
            zIndex="4"
        >
            <Flex
                alignItems="center"
                display={{ base: 'none', md: 'flex' }}
                fontSize="sm"
                gap="4"
                textColor="gray.200"
            >
                {navOptions.map(option => (
                    <NavOption key={option.label} {...option} />
                ))}
            </Flex>
        </Flex>
    );
};

export default Header;
