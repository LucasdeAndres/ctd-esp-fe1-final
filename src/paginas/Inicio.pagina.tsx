import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from "react";
import Personaje from "../types/character.types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPersonajes } from "../redux/Slices/personajesSlice";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const count = useAppSelector(state => state.counter.value)
    const filter = useAppSelector(state => state.filtro.filtro)

    const dispatch = useAppDispatch()
    const listaPersonajes = useAppSelector((state) => state.personaje.listaPersonajes);



    useEffect(() => {
      if (filter === "") {
          fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
              .then(response => response.json())
              .then((data) => {
                  const personajesConFavorito = data.results.map((personaje: Personaje) => ({
                      ...personaje,
                      favorite: false,
                  }));
                  dispatch(setPersonajes(personajesConFavorito));
              })
              .catch(error => {
                  console.error(error);
              });
      }
  }, [count, filter]);
  
  useEffect(() => {
      if (filter !== "") {
          fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
              .then(response => response.json())
              .then((data) => {
                  const personajesConFavorito = data.results.map((personaje: Personaje) => ({
                      ...personaje,
                      favorite: false,
                  }));
                  dispatch(setPersonajes(personajesConFavorito));
              })
              .catch(error => {
                  console.error(error);
              });
      }
  }, [filter]);


    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion count={count}/>
        <GrillaPersonajes listaPersonajes={listaPersonajes}/>
        <Paginacion count={count}/>
    </div>
}

export default PaginaInicio