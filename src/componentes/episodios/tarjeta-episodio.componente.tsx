import { Episodio } from '../../types/character.types';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 * 
 */

type episodeProp ={
    episode: Episodio,
}
const TarjetaEpisodio = ({episode}: episodeProp) => {

    return <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>{episode.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;