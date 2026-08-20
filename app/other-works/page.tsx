import Gallery from '../components/Gallery';
import Page from '../components/Page';

const images = [
	{ src: 'images/penguin-jars.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/love-your-time.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/party-croc.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/gnomie.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/owl-skull.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/bows-and-arrows.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/neon-drive.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cig-guy.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/kind-fox.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/rabbit.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/moon-night.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cave-men.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/jersey-devil.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/owl.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/findlay-market.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/stantons.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/yellow-festival.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/thread-count.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/hats.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/motorcycle.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/wall.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	
]

export default function OtherWorks(){
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
