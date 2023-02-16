import logo from './logo.svg';
import './App.css';
// import Fetcher from './componenets/Fetcher';
import Home from './componenets/Home';
import About from './componenets/About';
import Products from './componenets/Products';
import Error from './componenets/Error';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './componenets/Footer';
import Navbar from './componenets/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="About" element ={<About/>}/>
        <Route path="Products" element ={<Products/>}/>
        <Route path="*" element ={<Error/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* <Fetcher/> */}

 
    </div>
  );
}

export default App;
