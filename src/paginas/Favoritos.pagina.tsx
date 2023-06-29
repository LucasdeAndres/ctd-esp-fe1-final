import { useEffect, useState } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from "../redux/hooks";
import Personaje from "../types/character.types";

/**
 * Página de favoritos que muestra todos los personajes marcados como favoritos.
 *
 * Uso:
 * ```
 * <PaginaFavoritos />
 * ```
 *
 * @returns {JSX.Element} - La página de favoritos.
 */
const PaginaFavoritos = (): JSX.Element => {

    const [listaPersonajesFavoritos, setListaPersonajesFavoritos] = useState<Personaje[]>([])

    const listaFavoritos = useAppSelector((state) => state.favorito.listaFavoritos);

    useEffect(() => {
      setListaPersonajesFavoritos(listaFavoritos)
    }, [listaFavoritos]);

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes listaPersonajes={listaPersonajesFavoritos}/>
    </div>
}

export default PaginaFavoritos