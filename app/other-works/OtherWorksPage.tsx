'use client'
import Gallery from '../components/Gallery';
import Page from '../components/Page';

const images = [
	{ src: 'images/penguin-jars.png', alt: 'Painted Wooden Dolls', id: 'painted-doll-image', title: 'For Margaret', description: 'Painted Wooden Dolls'},
	{ src: 'images/love-your-time.png', alt: 'Demon Mask Illustration', id: 'demon-mask-image'},
	{ src: 'images/party-croc.png', alt: 'Party Croc Poster', id: 'party-croc-image', title: 'Punk Band Tee', description: 'Local Band'},
	{ src: 'images/gnomie.png', alt: 'Gnome Poster', id: 'Gnome Poster'},
	{ src: 'images/owl-skull.png', alt: 'Halloween Owl and Skull Illustration', id: 'owl-skull-image'},
	{ src: 'images/bows-and-arrows.png', alt: 'Bows and Arrows Poster', id: 'bows-arrows-image', title: 'Bows And Arrows'},
	{ src: 'images/neon-drive.png', alt: 'Neon Drive Illustration', id: 'neon-drive-image'},
	{ src: 'images/cig-guy.png', alt: 'Cigarette Smoker Illustration', id: 'cig-guy-image'},
	{ src: 'images/kind-fox.png', alt: 'Kind Fox Illustration', id: 'kind-fox-image'},
	{ src: 'images/rabbit.png', alt: 'Rabbit Illustration', id: 'rabbit-image'},
	{ src: 'images/moon-night.png', alt: 'Moon Night Illustration', id: 'moon-night-image', title: 'Bows and Arrows 2', description: 'Local Band'},
	{ src: 'images/cave-men.png', alt: 'Cave Men Illustration', id: 'cave-men-image', title: 'Album Cover', description: 'Local Band'},
	{ src: 'images/jersey-devil.png', alt: 'Jersey Devil Illustration', id: 'jersey-devil-image', description: 'T-Shirt Design'},
	{ src: 'images/owl.png', alt: 'Brave Owl Image', id: 'owl-image'},
	{ src: 'images/findlay-market.png', alt: 'Findaly Market Illustration', id: 'findlay-market-image', title: 'For Donna'},
	{ src: 'images/stantons.png', alt: 'Stantons Logo', id: 'stantons-image', description: 'T-Shirt Design'},
	{ src: 'images/yellow-festival.png', alt: 'Harmonica Festival Poster', id: 'yellow-festival-image', description: 'Contest Poster'},
	{ src: 'images/thread-count.png', alt: 'Thread Count Illustration', id: 'thread-count-image'},
	{ src: 'images/hats.png', alt: 'Fantasy Hats Illustration', id: 'hats-image'},
	{ src: 'images/motorcycle.png', alt: 'Self Portrait', id: 'motorcycle-image', title: 'Self Portrait', description: 'Marker on Paper'},
	{ src: 'images/wall.png', alt: 'Painted Wall', id: 'wall-image', title: `Porter's Mural`, description: 'Latex Paint'},
	
]

export default function OtherWorksPage(){
	return(
		<Page content={<Content/>}/>
	)
}

function Content(){
	return(
		<div className='gallery-wrap'>
			<Gallery images={images}/>
		</div>
	)
}
