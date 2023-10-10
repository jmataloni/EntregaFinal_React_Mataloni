import { CardFooter, Heading, Center, CardBody, Text, Image, Stack, Card, Button, ButtonGroup } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { CartContext } from '../context/ShoppingCartContext'

export const ItemDetail = ({ producto }) => {

    /* const { id } = useParams() */
    const [cantAgregada, setCantAgregada] = useState(false)
    const {agregarCart} = useContext(CartContext)

    const onAdd=(cantidad) => {
        setCantAgregada(true)
        agregarCart(producto, cantidad)
    }
    return (
            <Center p='1rem'>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={producto.img}
                            alt={producto.name}
                            borderRadius='lg'
                        />

                        <Stack mt='6' spacing='3'>
                            <Heading  fontFamily='Albert Sans' fontSize='25px'>{producto.name}</Heading>
                            <Text as='b'>
                                ${producto.price}
                            </Text>
                            <Text>
                                {producto.descripcion}
                            </Text>

                        </Stack>
                    </CardBody>

                    <CardFooter>
                        { !cantAgregada ? <ItemCount initial={1} onAdd={onAdd} /> : 
                            
                            <ButtonGroup gap='2'> 
                                <Button variant='solid' bg='#81b29a'><Link to='/cart'>Ir al carrito</Link></Button>
                                <Button variant='solid' bg='#a9def9'><Link to='/'>Volver</Link></Button>
                            </ButtonGroup>
                        }
                        
                    </CardFooter>
                </Card>

            </Center>
    )
}