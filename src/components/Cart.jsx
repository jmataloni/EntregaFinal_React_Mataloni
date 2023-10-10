import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Button, ButtonGroup, Container, Grid, GridItem, Text,Spacer } from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {

  const{cart, limpiar, total} = useContext(CartContext)

  return (
    <>
      <Container maxW='1200px'>
        {cart.length
          ? <div>
              <Grid templateColumns="repeat(2, 6fr)" gap={6}>

                {cart.map((producto) => {
                  return(
                  <GridItem w='100%' key={producto.id}>
                    <CartItem key={producto.id} producto={producto}/>
                  </GridItem>
                  )}
                )}
              </Grid>
              
              <Container centerContent mt='20px'> 
                <Text fontSize='20px' as='b'>Total a pagar: ${total()}</Text>
                <ButtonGroup gap='3' mt='15px'>
                  <Button onClick={() => limpiar()} bg='#81b29a'> Vaciar carrito</Button>
                  <Button bg='#a9def9'><Link to='/checkout' >Finalizar compra</Link></Button>
                </ButtonGroup>
                
              </Container>
            </div>
            : <div>
              <Text fontFamily='Albert Sans' fontSize='20px'> El carrito se encuentra vacio</Text>
              <Button mt='10px' bg='#a9def9'><Link to='/'>Ir a comprar</Link></Button>
            </div>
        }
      </Container>
      
    
    </>
  )
}
