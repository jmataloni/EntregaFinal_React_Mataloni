import React from 'react'
import {CartWidget} from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4' >
                    <Link to={"/"}>
                        ESTETICA
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton>
                            Categorias
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


        </>

    )
}

/* export default NavBar */