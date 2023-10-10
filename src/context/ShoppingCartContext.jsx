import { createContext, useState } from "react";

export const CartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)


    const agregarCart = (producto, cantidad) => {
        if(agregado(producto.id)){
            setCart(cart.map((p)=>{
                if(p.id === producto.id){
                    return {...p, cantidad: p.cantidad + cantidad}
                }
                else{
                    return p
                }
            }))
        } 
        else{
            setCart([...cart, {...producto, cantidad}])
        }

    }
    const cantProductos = () => {
        return cart.reduce((acumulador, producto)=> acumulador + producto.cantidad, 0)
    }
    const total = () => {
        return cart.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.price, 0)
    }

    const limpiar = () => {
        setCart([])
    }

    const agregado = (id) => {
        return cart.some(producto => producto.id === id)
    }

    const eliminar = (id) => {
        const actualizar = cart.filter(producto => producto.id !== id)
        setCart(actualizar)
        /* setCart(cart.filter(producto => producto.id !== id)) */
    }

    return (
        <CartContext.Provider value={{cart, agregarCart, limpiar, eliminar, total, cantProductos}}>
            {children}
        </CartContext.Provider>

    )

}