import { NoFavorites } from '../../components/ui';
import { Layout } from '../../layouts';
import { useState, useEffect } from 'react';
import { pokemons } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

interface PokemonFavorite {
	name: string;
	id: number;
}

const FavoritesPage = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<PokemonFavorite[]>([]);

	useEffect(() => setFavoritePokemons(pokemons()), []);

	return (
		<Layout title="Pokemons - Favoritos">
			{!favoritePokemons.length ? <NoFavorites /> : <FavoritePokemons favoritePokemons={favoritePokemons} />}
		</Layout>
	);
};

export default FavoritesPage;
