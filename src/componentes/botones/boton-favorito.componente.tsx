import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleFavorito } from '../../redux/Slices/favoritesSlice';

import Personaje from '../../types/character.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo.
 * 
 * @typedef {Object} personajePromp
 * @property {Personaje} personaje - El objeto de tipo Personaje que se utilizará para el botón.
 */

/**
 * Componente BotonFavorito.
 * 
 * @param {personajePromp} props - Las propiedades del componente.
 * @returns {JSX.Element} - Un elemento JSX que representa el botón de favorito.
 */

 type personajePromp = {
    personaje: Personaje
}

const BotonFavorito = ({personaje}: personajePromp) => {

  const listaFavoritos = useAppSelector(select => select.favorito.listaFavoritos)

  const src = listaFavoritos.some((fav) => fav.id === personaje.id)
  ? "/imagenes/star-filled.png"
  : "/imagenes/star.png";

    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(toggleFavorito(personaje))
    }


    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={handleClick}/>
    </div>
}

export default BotonFavorito;