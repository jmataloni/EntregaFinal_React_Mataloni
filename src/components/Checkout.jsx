import React, { useContext } from 'react'
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, Text } from '@chakra-ui/react'
import { Container, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { collection, serverTimestamp, getFirestore, addDoc } from 'firebase/firestore'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

export const Checkout = () => {

    const [cliente, setCliente] = useState({})
    const [orderId, setOrderId] = useState('')
    const { cart, total, limpiar } = useContext(CartContext)

    const datosCliente = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!cliente.name && !cliente.email) {
            Toastify({
                text: "Por favor, ingrese todos los datos",
                duration: 3000
            }).showToast();

        } else {
            const db = getFirestore()
            let order = {
                cliente,
                producto: cart,
                total: total(),
                fecha: serverTimestamp()
            }
            const venta = collection(db, "orders")
            addDoc(venta, order)
                .then((resultado) => {
                    setOrderId(resultado.id)
                    limpiar()
                })
                .catch((error) => console.log(error))
        }

    }

    return (
        <>

            {orderId !== ''
                ?
                <Container>
                    <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Su orden fue generada con éxito
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            El número de compra es: {orderId}. ¡Gracias por elegirnos!
                        </AlertDescription>
                    </Alert>
                    <Container mt='20px' centerContent><Button><Link to='/'>Volver a inicio</Link></Button></Container>
                    
                </Container>
                :
                <Container>
                    <Container maxW={Container.sm} mb='30px' centerContent>
                        <Text fontFamily='Albert Sans' fontSize='20px'>Ingrese sus datos para finalizar la compra</Text>
                    </Container>
                    <Container maxw='container.sm'>

                        <FormControl>

                            <FormLabel>Nombre</FormLabel>
                            <Input mb='15px' placeholder='Nombre' name='name' onChange={datosCliente} />

                            <FormLabel>Direccion de email</FormLabel>
                            <Input placeholder='example@email.com' type='email' name='email'/>
                        </FormControl>
                        <Container centerContent>
                            <Button mt={10} width={200} bg='#a9def9' type='submit' onClick={finalizarCompra} >Enviar</Button>
                        </Container>
                    </Container>
                </Container>
            }
        </>
    )
}
