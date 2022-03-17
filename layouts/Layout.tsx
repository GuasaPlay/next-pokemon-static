import type { NextPage } from 'next';

import Head from 'next/head';
import { Navbar } from '../components/ui';
type Props = {
	title?: string;
};

const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

export const Layout: NextPage<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name="author" content="Oscar Calle" />
				<meta name="description" content={`Informacion sobre ${title}`} />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />

				<meta property="og:title" content={`Información sobre el pokemon ${title}`} />
				<meta property="og:description" content={`Esta es la página sobre ${title}`} />
				<meta property="og:image" content={`${origin}/images/banner.png`} />
			</Head>

			<Navbar />

			<main style={{ padding: '0 20px' }}>{children}</main>
		</>
	);
};
