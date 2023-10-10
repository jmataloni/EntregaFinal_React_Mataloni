import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import { Cart } from "./components/Cart"
import { Checkout } from "./components/Checkout"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {

  const greeting = "Bienvenidos a mi E-commerce"
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting={greeting} />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/checkout" element={<Checkout/>}/> 
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>

    </>
  )
}

export default App
