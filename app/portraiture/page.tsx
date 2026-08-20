import Gallery from '../components/Gallery';
import Page from '../components/Page';

const images = [
	{ src: 'images/cats-yellow.png', alt: 'mouse family illustration', id: 'cats-yellow-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-rabbit.png', alt: 'mouse family illustration', id: 'dog-rabbit-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-greta.png', alt: 'mouse family illustration', id: 'dog-greta-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-flowers.png', alt: 'mouse family illustration', id: 'dog-flowers-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-oakley.png', alt: 'mouse family illustration', id: 'dog-oakley-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/bumbles.png', alt: 'mouse family illustration', id: 'bumbles-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-blue.png', alt: 'mouse family illustration', id: 'cat-blue-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/richard-parker.png', alt: 'mouse family illustration', id: 'richard-parker-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-purple.png', alt: 'mouse family illustration', id: 'dog-purple-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-rose.png', alt: 'mouse family illustration', id: 'dog-rose-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-sunflower.png', alt: 'mouse family illustration', id: 'dog-sunflower-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cats.png', alt: 'mouse family illustration', id: 'cats-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/willow.png', alt: 'mouse family illustration', id: 'willow-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-wood.png', alt: 'mouse family illustration', id: 'dog-wood-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat.png', alt: 'mouse family illustration', id: 'cat-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-rosie.png', alt: 'mouse family illustration', id: 'dog-rosie-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-pumpkin.png', alt: 'mouse family illustration', id: 'dog-pumpkin-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/guinea-pig.png', alt: 'mouse family illustration', id: 'guinea-pig-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-green.png', alt: 'mouse family illustration', id: 'dog-green-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-warrior.png', alt: 'mouse family illustration', id: 'cat-warrior-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-sage.png', alt: 'mouse family illustration', id: 'cat-sage-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-dog.png', alt: 'mouse family illustration', id: 'cat-dog-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-raze.png', alt: 'mouse family illustration', id: 'dog-raze-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-black.png', alt: 'mouse family illustration', id: 'dog-black-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-rose-daisy.png', alt: 'mouse family illustration', id: 'dog-rose-daisy-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-hotdog.png', alt: 'mouse family illustration', id: 'dog-hotdog-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-blue.png', alt: 'mouse family illustration', id: 'dog-blue-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/cat-toy.png', alt: 'mouse family illustration', id: 'cat-toy-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dogs-blue.png', alt: 'mouse family illustration', id: 'dogs-blue-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-white.png', alt: 'mouse family illustration', id: 'dog-white-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/dog-elsa.png', alt: 'mouse family illustration', id: 'dog-elsa-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
]

export default function Portraiture(){
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
