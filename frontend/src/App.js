import "./App.css";
import Footer from "./component/Footer/Footer";
import "./bootstrap.min.css";
import Header from "./component/Header/Header";
import LandPage from "./component/screen/screen";
import Login from './component/Login/Login'
import Signup from './component/signup/signup'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/products/product";
import AdminHome from "./component/AdminHome/AdminHome";
import Edituser from "./component/userEditor/userEditor"
import AdminLogin from "./component/adminLogin/adminLogin"
import AdminHeader from "./component/AdminHeader/Admin"

function App() {
const admin="admin"
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage/>}/>
        <Route path="/login"  element={[<Header title="USER"/>,<Login/>]}/>
        <Route path="/signup" element={[<Header title="USER"/>,<Signup/>]}/>
        <Route path="/products"  element={[<Header title="USER"/>,<Products/>]}/>
        <Route path="/admin"  element={[<AdminHeader/>,<AdminLogin title='admin'/>]}/>
        <Route path="/adminHome"  element={[<AdminHeader/>,<AdminHome/>]}/>
        <Route path='adminHome/edituser/:userId' element={[<AdminHeader/>,<Edituser/>]} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
