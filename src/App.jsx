import {Routes, Route} from "react-router-dom"
import NavigationBar from "./Component/header/navigationBar"
import ProductList from "./Component/ProductList"
import Home from "./Component/home/Home"
import About from "./Component/about/About";
import BlogUs from "./Component/blog/BlogUs";
import ContactUs from './Component/contact/ContactUs';


const App = () => {
  return (

    <div>
      <NavigationBar/>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About/>} />
         <Route path="/blog" element={<BlogUs />}/>
         <Route path="/contact" element={<ContactUs />}/>
         <Route path="/products" element={<ProductList />}/>

      </Routes>

    </div>
  )
}

export default App