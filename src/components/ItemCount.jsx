import { Button, ButtonGroup, IconButton, useToast } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react'
import { useState } from 'react'

export const ItemCount = ({ initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)
    const toast = useToast()
    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <ButtonGroup>
                <IconButton onClick={decrement} icon={<MinusIcon />}></IconButton>
                <Button>{counter}</Button>
                <IconButton onClick={increment} icon={<AddIcon />}></IconButton>
            </ButtonGroup>
            <Button ml='8px' variant='solid' bg='#a9def9' isDisabled={counter === 0} onClick={() => {
                onAdd(counter); toast({
                    title: 'Producto agregado al carrito',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            }}>
                Agregar al carrito
            </Button>
        </>
    )
}
