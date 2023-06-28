import { useAppDispatch } from '../../redux/hooks';
import { setFiltro } from '../../redux/Slices/filtroSlice';
import './filtros.css';

const Filtros = () => {

    const dispatch = useAppDispatch()

    const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filtroValue = event.target.value;
        dispatch(setFiltro(filtroValue));
    };

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={handleFiltroChange}/>
    </div>
}

export default Filtros;