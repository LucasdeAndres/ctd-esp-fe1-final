import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCharactersByFilter, fetchCharactersPage, resetListaPersonajes } from "../redux/Slices/personajesSlice";
import { clearFiltro } from "../redux/Slices/filtroSlice";
 
/**
 * Página principal que muestra el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ```
 * <PaginaInicio />
 * ```
 *
 * @returns {JSX.Element} - La página de inicio.
 */
const PaginaInicio = (): JSX.Element => {

    const count = useAppSelector(state => state.counter.value)
    const filter = useAppSelector(state => state.filtro.filtro)

    const dispatch = useAppDispatch()
    const listaPersonajes = useAppSelector((state) => state.personaje.listaPersonajes);



    useEffect(() => {
      if (filter === "") {
        dispatch(fetchCharactersPage(count));
      } else {
        dispatch(fetchCharactersByFilter(filter)).then((result) => {
          if (fetchCharactersByFilter.rejected.match(result)) {
            dispatch(resetListaPersonajes())
          }
        });
      }
    }, [count, filter]);


  const handleClickFiltros = () => {
    dispatch(clearFiltro())
  }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handleClickFiltros}>Limpiar Filtros</button>
        </div>
        <Filtros />
        <Paginacion count={count}/>
        <GrillaPersonajes listaPersonajes={listaPersonajes}/>
        <Paginacion count={count}/>
    </div>
}

export default PaginaInicio