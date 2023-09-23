import React from 'react'
import {ItemList} from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {
    const {categoria} = useParams()
    const productos = [

        {id: 1, name: "Crema facial", descripcion:"Gel fluido de textura sedosa con un innovador activo biotecnológico bifuncional", price: 1000, categoria: "rostro"},
        {id: 2, name: "Crema corporal", descripcion: "Emulsión corporal con una innovadora molécula de vitamina C, alfa arbutina, resveratrol, melanina y péptidos específicos.",price: 2000, categoria: "corporal"},
        {id: 3, name: "Anti age", descripcion:"Crema de suave emoliencia con un complejo de cuatro moléculas de ácido hialurónico que asegura una hidratación prolongada", price: 3000, categoria: "rostro"},
        {id: 4, name: "Paleta de Sombras", descripcion:"Prebase hidratante con Ácido Hialurónico. Prolonga la duración del maquillaje. ", price: 4000, categoria: "maquillaje"},
        {id: 5, name: "Protector solar", descripcion:"Protector solar con una excelente dispersión que otorgan una protección solar de amplio espectro y previene el estrés oxidativo. ", price: 4000, categoria: "solar"}
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if(productos.length > 0){
            setTimeout(()=>{
                resolve(productos)
            }, 2000)

        } else {
            reject("No se pueden mostrar los productos")
        }
    })

    mostrarProductos
    .then((resultado)=> {})
    .catch((error)=> {console.log(error)})

    const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList productos={filteredProducts}/>
        </div>
    )
}