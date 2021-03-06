import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '../../layouts';
import pokeApi from '../../api/pokeApi';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { useState } from 'react';

import confetti from 'canvas-confetti';

import { existInFavorites, toggleFavorites } from '../../utils';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(existInFavorites(pokemon.name));

	const onToggleFavorite = () => {
		toggleFavorites(pokemon.name, pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (isInFavorites) return;

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 120,
			angle: -120,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={pokemon.sprites.other?.dream_world.front_default || 'no.image.png'}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>

							<Button color="gradient" ghost={!isInFavorites} onClick={onToggleFavorite}>
								{isInFavorites ? 'Quitar de favoritos' : 'Guardar en favoritos'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction="row" display="flex" gap={0}>
								<Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
								<Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	return {
		paths: data.results.map((pokemon) => ({ params: { name: pokemon.name } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

	const pokemon = {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};

	return {
		props: {
			pokemon,
		},
	};
};

export default PokemonPage;
