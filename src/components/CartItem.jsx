import React, { useContext } from 'react'
import { Card, Image, Stack, CardBody, Text, CardFooter, Heading, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { CartContext } from '../context/ShoppingCartContext'

export const CartItem = ({producto}) => {

  const{eliminar} = useContext(CartContext)

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        maxH={{ base: '100%', sm: '300px' }}
        overflow='hidden'
        variant='outline'
        size='md'
        bg='#fffcf2'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={producto.img}
          alt={producto.name}
        />

        <Stack>
          <CardBody>
            <Heading size='sm'>{producto.name}</Heading>

            <Text py='1' >
              Precio: ${producto.price}
            </Text>
            <Text py='1'>
              Cantidad: {producto.cantidad}
            </Text>
            <Text py='1'>
              Subtotal: $ {producto.cantidad * producto.price} 
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue' onClick={()=> eliminar(producto.id)}>
              <DeleteIcon/>
            </Button>
          </CardFooter>
        </Stack>
      </Card>

    </>
  )
}
