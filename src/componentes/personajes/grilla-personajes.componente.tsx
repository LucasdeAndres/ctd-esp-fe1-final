
import Personaje from '../../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

type grillaDePersonajesProp = {
    listaPersonajes: Personaje[]
}
const GrillaPersonajes = ({listaPersonajes} : grillaDePersonajesProp) => {

    if (!listaPersonajes || listaPersonajes.length === 0) {
        return <span>Ups, no se encontraron personajes.</span>;
      }

    return <div className="grilla-personajes">
    {listaPersonajes.map(personaje => (
      <TarjetaPersonaje key={personaje.id} personaje={personaje} />
    ))}
  </div>
}
 
export default GrillaPersonajes;