import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
          <NavBar/>
          <Home/>
          <Footer/>
    </>
  );
}
export default App;