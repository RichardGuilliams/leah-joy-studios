import type { Metadata } from 'next';
import HomePage from './HomePage'

export const metadata: Metadata = {
	title: 'Leah Joy Studio',
	description: 'Local Commision Based Artist | Milford, Ohio',

	openGraph: {
		title: 'Leah Joy Studio',
		description: 'Artist Portfolio for Leah Joy',
		url: `${process.env.URL}`,
		siteName: 'Leah Joy Studio',
		images: [{
			url: `${process.env.URL}/images/self-portrait.png`,
			width: 1200,
			height: 630,
			alt: 'Gallery preview',
		}],
		type: 'website',
	},

	twitter: {
		card: "summary_large_image",
		title: "Leah Joy Studio",
		description: "Leah Joy Online Art Portfolio"
	}
}

export default function Home() {
  	return (
		<HomePage/>
  	);
}


