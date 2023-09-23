import React from 'react'
import { Card, CardBody, Heading, CardFooter, ButtonGroup, Divider, Image, Stack, Button, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Item = ({id, name, price, descripcion, categoria}) => {
    return (

        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='productos'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        ${price}
                    </Text>
                    
                    
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        <Link to={`/item/${id}`}>
                            Ver detalle
                        </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

    )
}

/* export default Item */