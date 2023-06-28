import { useEffect, useState } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from "../redux/hooks";
import Personaje from "../types/character.types";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const [listaPersonajesFavoritos, setListaPersonajesFavoritos] = useState<Personaje[]>([])

    useEffect(() => {
        const favoritosStorage = localStorage.getItem('favoritos');
        console.log(favoritosStorage);
        
        if (favoritosStorage) {
          const favoritos = JSON.parse(favoritosStorage);
          setListaPersonajesFavoritos(favoritos);
        }
      }, [localStorage.getItem('favoritos')]);

      console.log(localStorage.getItem('favoritos'));
      

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes listaPersonajes={listaPersonajesFavoritos}/>
    </div>
}

export default PaginaFavoritos