import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams} from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [loader, setLoader] = useState({})
    const[myProduct, setMyProduct] = useState([]) 
    
    useEffect(()=> {
        const db = getFirestore()
        setLoader(true)
        const detailCollection = collection(db, "productos")
        const ref = doc(detailCollection, id)
        getDoc(ref)
        .then((resultado) => setMyProduct({id:resultado.id, ...resultado.data()}))
        .catch((error) => console.log(error))
        .finally(() => setLoader(false))
    }, [])

    return (
        <div>
            {loader ? <Spinner color='blue.500' size='xl' /> : <ItemDetail producto={myProduct} />}
        </div>
    )
}