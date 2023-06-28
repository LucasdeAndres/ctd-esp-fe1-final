import { type } from 'os';
import { useAppDispatch } from '../../redux/hooks';
import { decrement, increment } from '../../redux/Slices/counterSlice';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */

type countProp = {
    count: number,
}

const Paginacion = ({count}: countProp) => {

    const dispatch = useAppDispatch()

    const handleAnterior = () => {
        dispatch(decrement())
    }

    const handleSiguiente = () => {
        dispatch(increment())
    }

    return <div className="paginacion">
        <button disabled={count === 1} className={"primary"} onClick={handleAnterior}>Anterior</button>
        <button disabled={count === 42} className={"primary"} onClick={handleSiguiente}>Siguiente</button>
    </div>
}

export default Paginacion;