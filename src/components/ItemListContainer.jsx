import React, { useEffect, useState } from 'react'
import {ItemList} from './ItemList'
import { Spinner, Text, Container } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, where, query} from 'firebase/firestore'

export const ItemListContainer = ({ greeting }) => {
    const [loader, setLoader] = useState({})
    const {categoria} = useParams()
    const [myProducts, setMyProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        setLoader(true)
        const itemsCollection = categoria ? query(collection(db, "productos"), where("categoria", "==", categoria)): collection(db, "productos")
        getDocs(itemsCollection)
        .then((resultado) => {
            const list = resultado.docs.map((producto) => {
                return{
                    id: producto.id, 
                    ...producto.data()
                }
            })
            setMyProducts(list)
        })
        .catch((error) => {console.log(error)})
        .finally(() => setLoader(false))
    
    }, [categoria])

    return (
        <>
            <Container centerContent>
                <Text fontFamily='Aboreto' as='b' fontSize='20px' mb='10px'>{greeting}</Text>
            </Container>
            {loader ? <Spinner color='blue.500' size='xl' /> : <ItemList productos={myProducts} />}
            
        </>
    )
}