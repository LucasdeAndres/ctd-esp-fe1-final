interface Origin {
    name: string;
    url: string;
}
interface Personaje {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    episode: string[];
    favorite: boolean;
    origin: Origin;
    gender: string;
}

export interface Episodio{
    id: number;
    name: string;
    episode: string,
    airDate: string
}

export default Personaje;