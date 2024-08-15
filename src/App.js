
import { Route, Routes } from "react-router-dom";
import Footer from "./tabs/footer";
import Products from"./tabs/product";
import Menu from "./tabs/menu";
import Home from "./tabs/home";
import About from "./tabs/about";
import Contact from "./tabs/contact";
import Add_product from "./tabs/add-product";
import Update_product from "./tabs/update-product";
import Ourproducts from "./tabs/our-product";
import Faqs from "./tabs/faqs";


function App(){
  return(
    <>

    <Menu/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/menu" element={<Products/>}/>
   <Route path="/about-us" element={<About/>}/>
   <Route path="/contact-us" element={<Contact/>}/>
    <Route path="/add-product" element={<Add_product/>}/>
    <Route path="/update-product/:id" element={<Update_product/>}/>
    <Route path="/our-product" element={<Ourproducts/>}/>
    <Route path="/faq" element={<Faqs/>}/>
    
   </Routes>
    <Footer/>
    </>
  )
}
export default App;