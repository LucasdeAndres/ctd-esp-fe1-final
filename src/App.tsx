import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { useAppSelector } from './redux/hooks';

function App() {


  const listaPersonajes = useAppSelector((state) => state.personaje.listaPersonajes);


  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        {listaPersonajes.map((personaje) => (
          <Route
            key={personaje.id}
            path={`detalle/${personaje.id}`}
            element={<PaginaDetalle personaje={personaje}/>}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
