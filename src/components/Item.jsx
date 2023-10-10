import React from 'react'
import { Card, CardBody, Heading, CardFooter, ButtonGroup, Divider, Image, Stack, Button, Text, Container} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Item = ({id, name, price, img, descripcion, categoria}) => {
    return (
        <Container centerContent maxW='md'>
            <Card maxW='md' bg='#f6fff8'>
            <CardBody>
                <Image
                    src={img}
                    alt='productos'
                    boxSize='300px'
                    borderRadius='lg'
                />
                <Container centerContent>
                <Stack mt='6' spacing='3'>
                    <Heading fontSize='18px' fontFamily='Albert Sans'>{name}</Heading>
                    <Text fontSize='16px'>${price}</Text>
                </Stack>
                </Container>
                
            </CardBody>
            <Divider />
            <CardFooter>
                <Container centerContent>
                    <Button variant='solid' bg='#a9def9'>
                        <Link to={`/item/${id}`}>
                            Ver detalle
                        </Link>
                    </Button>
                </Container>
            </CardFooter>
        </Card>
        </Container>
        

    )
}

/* export default Item */