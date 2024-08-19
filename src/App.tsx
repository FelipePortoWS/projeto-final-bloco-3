import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import GetAllCategoria from "./components/categoria/getallcategoria/GetAllCategoria";
import PostPutCategoria from "./components/categoria/postputcategoria/PostPutCategoria";
import DeleteCategoria from './components/categoria/deletecategoria/DeleteCategoria';
import GetAllProduto from './components/produto/getallproduto/GetAllProduto';
import PostPutProduto from "./components/produto/postputproduto/PostPutProduto";
import DeleteProduto from "./components/produto/deleteproduto/DeleteProduto";
import { toastAlerta } from './utils/toastAlerta';
import "react-toastify/dist/ReactToastify.css";

import PostCategoria from "./components/categoria/postcategoria/PostCategoria"
import PostProduto from "./components/produto/postproduto/PostProduto"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer />
        <BrowserRouter>
        <NavBar/>
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/categorias" element={<GetAllCategoria/>} />
              <Route path="/postPutCategoria" element={<PostPutCategoria/>} />
              <Route path="/deleteCategoria" element={<DeleteCategoria/>} />
              <Route path="/produtos" element={<GetAllProduto/>} />
              <Route path="/postPutProduto" element={<PostPutProduto/>} />
              <Route path="/deleteProduto" element={<DeleteProduto/>} />
              <Route path="/postCategoria" element={<PostCategoria/>} />
              <Route path="/postProduto" element={<PostProduto/>} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  );
}
export default App;