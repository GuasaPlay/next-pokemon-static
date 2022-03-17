interface PokemonFavorite {
	name: string;
	id: number;
}

const toggleFavorites = (name: string, id: number) => {
	let favorites: PokemonFavorite[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	const foundPokemon = favorites.find((pokemon) => pokemon.name === name);

	if (foundPokemon) {
		favorites = favorites.filter((pokemon) => pokemon.name !== name);
	} else {
		favorites.push({ name, id });
	}

	// if (favorites.includes(name)) {
	// 	favorites = favorites.filter((item) => item !== name);
	// } else {
	// 	favorites.push(name);
	// }

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (name: string): Boolean => {
	if (typeof window === 'undefined') return false;
	const favorites: PokemonFavorite[] = JSON.parse(localStorage.getItem('favorites') || '[]');
	return favorites.some((pokemon) => pokemon.name === name);
};

const pokemons = (): PokemonFavorite[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export { toggleFavorites, existInFavorites, pokemons };
