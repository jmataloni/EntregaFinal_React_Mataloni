import React, { useContext } from 'react'
import { Badge, HStack } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

export const CartWidget = () => {

    const {cantProductos} = useContext(CartContext)
    return (
        <>
            <HStack>
                <p>🛒</p>
                {cantProductos() > 0 && <Badge colorScheme='purple' fontSize='15px'>{cantProductos()}</Badge>}
            </HStack>
        </>
    )
}