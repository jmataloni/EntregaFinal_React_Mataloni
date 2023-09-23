import { BrowserRouter, Routes, Route } from "react-router-dom"
import {ItemListContainer} from "./components/ItemListContainer"
import {NavBar}  from "./components/NavBar"
import { Cart } from "./components/Cart"
import { ItemDetailContainer } from "./components/ItemDetailContainer"

function App() {

  const greeting = "Bienvenidos a mi E-commerce" 
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={greeting}/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
