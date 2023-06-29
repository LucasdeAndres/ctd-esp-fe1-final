

import Personaje from '../../types/character.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @typedef {Object} personajePromp
 * @property {Personaje} personaje - El objeto de tipo Personaje que se utilizará para la tarjeta.
 *
 * @param {personajePromp} props - Las propiedades del componente.
 * @returns {JSX.Element} - Un elemento JSX que representa la tarjeta del personaje.
 */

type personajePromp = {
    personaje: Personaje
}
const TarjetaPersonaje = ({personaje}: personajePromp) => {




    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito personaje={personaje}/>
        </div>
    </div>
}

export default TarjetaPersonaje;