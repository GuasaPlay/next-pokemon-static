import { Grid } from '@nextui-org/react';

import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface PokemonFavorite {
	name: string;
	id: number;
}

interface Props {
	favoritePokemons: PokemonFavorite[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{favoritePokemons.map((pokemon) => (
				<FavoriteCardPokemon id={pokemon.id} name={pokemon.name} key={pokemon.id} />
			))}
		</Grid.Container>
	);
};
