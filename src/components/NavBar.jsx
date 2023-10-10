import React from 'react'
import {CartWidget} from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer, Container, Text
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
        <Container bg='#22223b' maxW='100%' p='2px' mb='20px'>
            <Flex>
                    <Box p='4' >
                        <Link to={"/"}>
                            <Text fontSize='20px' color='#fffcf2' fontFamily='Aboreto'>KINTSUGI</Text>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box p='4'>
                        <Menu>
                            <MenuButton>
                                <Text color='#fffcf2' fontSize='20px' fontFamily='Albert Sans'>Categorias</Text>
                            </MenuButton>
                            <MenuList>
                                <MenuItem><Link to={`/categoria/${'rostro'}`}>Rostro</Link></MenuItem>
                                <MenuItem><Link to={`/categoria/${'corporal'}`}>Corporal</Link></MenuItem>
                                <MenuItem><Link to={`/categoria/${'maquillaje'}`}>Maquillaje</Link></MenuItem>
                                <MenuItem><Link to={`/categoria/${'solar'}`}>Solar</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Spacer />
                    <Box p='4'>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                    </Box>
                </Flex>
        </Container>
            


        </>

    )
}