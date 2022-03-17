import { SmallPokemon } from '../../interfaces';
import { NextPage } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: NextPage<Props> = ({ pokemon: { img, name, id } }) => {
	const router = useRouter();

	const onClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1}>
			<Card hoverable clickable onClick={onClick}>
				<Card.Body>
					<Card.Image src={img} width="100%" height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
