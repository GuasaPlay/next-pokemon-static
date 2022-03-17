import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
	name: string;
	id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id, name }) => {
	const { push } = useRouter();
	const handleClick = () => push(`/name/${name}`);
	return (
		<Grid xs={6} sm={3} md={2} xl={1} onClick={handleClick}>
			<Card clickable hoverable css={{ padding: 10 }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					width={'100%'}
					height={'140px'}
				/>
			</Card>
		</Grid>
	);
};
