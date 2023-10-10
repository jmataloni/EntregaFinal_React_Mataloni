import React from 'react';
import { Item } from './Item';
import { Container, Grid, GridItem } from '@chakra-ui/react';

export const ItemList = ({ productos }) => {
    return (
        <div>
            <Container maxW='1200px'>
                <Grid templateColumns="repeat(3, 6fr)" gap={6}>
                    {productos.map((p) => {
                        return (
                            <GridItem w='100%' key={p.id}>
                                <Item
                                    id={p.id}
                                    name={p.name}
                                    price={p.price}
                                    categoria={p.categoria}
                                    img={p.img}
                                    descripcion={p.descripcion}
                                />
                            </GridItem>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};

