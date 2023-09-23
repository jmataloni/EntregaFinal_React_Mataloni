import React from 'react'
import { Item } from './Item'

export const ItemList = ({ productos }) => {

    return (
        <div>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        categoria={p.categoria}
                        descripcion={p.descripcion}
                    />
                )

            })

            }
        </div>
    )
}
