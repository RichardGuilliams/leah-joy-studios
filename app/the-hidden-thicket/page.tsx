import Gallery from '../components/Gallery';
import Page from '../components/Page';

const images = [
	{ src: 'images/mouse-pot.png', alt: 'mouse family illustration', id: 'mouse-pot-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/mouse-family.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/mouse-village.png', alt: 'mouse family illustration', id: 'mouse-village-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-shop.png', alt: 'mouse family illustration', id: 'cat-shop-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/mouse-house.png', alt: 'mouse family illustration', id: 'mouse-house-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-cycle.png', alt: 'mouse family illustration', id: 'cat-cycle-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-dog-apartment.png', alt: 'mouse family illustration', id: 'cat-dog-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/mouse-farmer.png', alt: 'mouse family illustration', id: 'mouse-farmer-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/rabbit-house.png', alt: 'mouse family illustration', id: 'rabbit-house-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/mouse-house-shop.png', alt: 'mouse family illustration', id: 'mouse-house-shop-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/brick-house.png', alt: 'mouse family illustration', id: 'brick-house-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/snail-house.png', alt: 'mouse family illustration', id: 'snail-house-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/crocodile-mom.png', alt: 'mouse family illustration', id: 'crocodile-mom-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/fox-house.png', alt: 'mouse family illustration', id: 'fox-house-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/owl-house.png', alt: 'mouse family illustration', id: 'owl-house-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/fox-house-snowy.png', alt: 'mouse family illustration', id: 'fox-house-snowy-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
]

export default function HiddenThicket(){
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
