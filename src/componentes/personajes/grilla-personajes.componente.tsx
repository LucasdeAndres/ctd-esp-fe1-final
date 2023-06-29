

import Personaje from '../../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la página de inicio.
 * 
 * @typedef {Object} grillaDePersonajesProp
 * @property {Personaje[]} listaPersonajes - La lista de personajes a mostrar en la grilla.
 * 
 * @param {grillaDePersonajesProp} props - Las propiedades del componente.
 * @returns {JSX.Element} - Un elemento JSX que representa la grilla de personajes.
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