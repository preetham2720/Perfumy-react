import Navbar from "./componens/Navbar";
import Search from "./componens/Search";
import Product from "./componens/Product";
import About from "./componens/About";
import Footer from "./componens/Footer";
import "./main.css";

function App(){
    return(
    <>
    <Navbar></Navbar>
    <Search></Search>
    <Product></Product>
    <About></About>
    <Footer></Footer>
    </>
)
}

export default App