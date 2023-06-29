import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import Personaje from "../types/character.types";
import { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchEpisodes } from "../redux/Slices/episodesSlice";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

type personajePromp = {
    personaje: Personaje
}
const PaginaDetalle = ({personaje}: personajePromp) => {
    

    const episodes = useAppSelector(select => select.episode.episodios)

    console.log(episodes);
    

    const dispatch = useAppDispatch()

    const numerosFinales = personaje.episode.map(url => {
        const numero = url.match(/\d+$/); 
        return numero ? parseInt(numero[0]) : null; 
      });
      console.log(numerosFinales);
      

      const numerosFinalesString = numerosFinales.filter(numero => numero !== null).join(',');

      console.log(numerosFinalesString);
      

      useEffect(() => {
        dispatch(fetchEpisodes(numerosFinalesString));
      }, [dispatch]);

      console.log(episodes);
      
      

    return <div className="container">
        <h3>{personaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje.image} alt={personaje.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{personaje.name}</p>
                    <p>Planeta: {personaje.origin.name}</p>
                    <p>Genero: {personaje.gender}</p>
                </div>
                <BotonFavorito personaje={personaje}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        
        <div className={"episodios-grilla"}>
            {episodes.map(episodio =>{
              return  <TarjetaEpisodio episode={episodio}/>
            })}
        </div>
    </div>
}

export default PaginaDetalle