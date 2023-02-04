// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let getToken = localStorage.getItem('token')
  if (getToken) {
    return (
      <div className="App">
        <ToastContainer/>
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    )
  }
  else {
    <h1>Error</h1>
  }
  ;
}

export default App;
