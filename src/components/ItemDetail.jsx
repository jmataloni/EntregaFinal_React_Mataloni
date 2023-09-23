import { CardFooter, Heading, Center, CardBody, Text, Image, Stack, Card, Button } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = ({ productos }) => {

    const { id } = useParams()
    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Center p='1rem'>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1546430454-045f92c202a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                                        alt='productos'
                                        borderRadius='lg'
                                    />

                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{p.name}</Heading>
                                        <Text>
                                            ${p.price}
                                        </Text>
                                        <Text>
                                            {p.descripcion}
                                        </Text>

                                    </Stack>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
                                        Agregar al carrito
                                    </Button>
                                </CardFooter>
                            </Card>

                        </Center>


                    </div>
                )
            })}
        </div>
    )
}