import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFiltro } from '../../redux/Slices/filtroSlice';
import './filtros.css';

/**
 * Componente Filtros.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa los filtros.
 */

const Filtros = (): JSX.Element => {

    const filter = useAppSelector(state => state.filtro.filtro)

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState(filter);

      /**
   * Manejador del cambio de filtro.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - El evento de cambio del input.
   */

    const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filtroValue = event.target.value;
        setInputValue(filtroValue)
        dispatch(setFiltro(inputValue));
    };

    useEffect(() => {
        if (filter === "") {
          setInputValue("");
        }
      }, [filter]);


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={inputValue} onChange={handleFiltroChange}/>
    </div>
}

export default Filtros;