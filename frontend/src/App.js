import "./App.css";
import Footer from "./component/Footer/Footer";
import "./bootstrap.min.css";
import Header from "./component/Header/Header";
import LandPage from "./component/screen/screen";
import Login from './component/Login/Login'
import Signup from './component/signup/signup'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/products/product";

function App() {
const admin="admin"
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Header/>,<LandPage/>]}/>
        <Route path="/login"  element={[<Header/>,<Login title='user'/>]}/>
        <Route path="/signup" element={[<Header/>,<Signup/>]}/>
        <Route path="/products"  element={[<Header/>,<Products/>]}/>
        <Route path="/admin"  element={[<Header/>,<Login title='admin'/>]}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
