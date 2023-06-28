import { useAppDispatch } from '../../redux/hooks';
import { toggleFavorito } from '../../redux/Slices/personajesSlice';
import Personaje from '../../types/character.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 * 
 */

 type personajePromp = {
    personaje: Personaje
}

const BotonFavorito = ({personaje}: personajePromp) => {
    const src = personaje.favorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(toggleFavorito(personaje.id))
    }

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={handleClick}/>
    </div>
}

export default BotonFavorito;