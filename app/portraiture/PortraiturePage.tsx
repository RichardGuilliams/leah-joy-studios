'use client'
import Gallery from '../components/Gallery';
import Page from '../components/Page';

const images = [
	{ src: 'images/cats-yellow.png', alt: 'Cat Illustration', id: 'cats-yellow-image'},
	{ src: 'images/dog-rabbit.png', alt: 'Dog and Rabbit Illustration', id: 'dog-rabbit-image'},
	{ src: 'images/dog-greta.png', alt: 'Greta The Dog Illustration', id: 'dog-greta-image', title: 'Greta'},
	{ src: 'images/dog-flowers.png', alt: 'Dog And Flowers Illustration', id: 'dog-flowers-image'},
	{ src: 'images/dog-oakley.png', alt: 'Oakley The Dog llustration', id: 'dog-oakley-image'},
	{ src: 'images/bumbles.png', alt: 'Bumble The Rabbit llustration', id: 'bumbles-image'},
	{ src: 'images/cat-blue.png', alt: 'Cat Illustration', id: 'cat-blue-image'},
	{ src: 'images/richard-parker.png', alt: 'Richard Parker Illustration', id: 'richard-parker-image'},
	{ src: 'images/dog-purple.png', alt: 'Dog Illustration', id: 'dog-purple-image'},
	{ src: 'images/dog-rose.png', alt: 'Dog Illustration', id: 'dog-rose-image'},
	{ src: 'images/dog-sunflower.png', alt: 'God Illustration', id: 'dog-sunflower-image'},
	{ src: 'images/cats.png', alt: 'Cats Illustration', id: 'cats-image'},
	{ src: 'images/willow.png', alt: 'Dog Illustration', id: 'willow-image', title: 'Willow'},
	{ src: 'images/dog-wood.png', alt: 'Dog Illustration', id: 'dog-wood-image'},
	{ src: 'images/cat.png', alt: 'Cat Illustration', id: 'cat-image'},
	{ src: 'images/dog-rosie.png', alt: 'Rosie The Dog Illustration', id: 'dog-rosie-image'},
	{ src: 'images/dog-pumpkin.png', alt: 'Dog Illustration', id: 'dog-pumpkin-image'},
	{ src: 'images/guinea-pig.png', alt: 'Guinea Pig Illustration', id: 'guinea-pig-image'},
	{ src: 'images/dog-green.png', alt: 'Dog Illustration', id: 'dog-green-image'},
	{ src: 'images/cat-warrior.png', alt: 'Cat Warrior Illustration', id: 'cat-warrior-image'},
	{ src: 'images/cat-sage.png', alt: 'Cat Sage Illustration', id: 'cat-sage-image'},
	{ src: 'images/cat-dog.png', alt: 'Cat and Dog Illustration', id: 'cat-dog-image'},
	{ src: 'images/dog-raze.png', alt: 'Raze the Dog Illustration', id: 'dog-raze-image'},
	{ src: 'images/dog-black.png', alt: 'Dog Black Illustration', id: 'dog-black-image'},
	{ src: 'images/dog-rose-daisy.png', alt: 'Dog Illustration', id: 'dog-rose-daisy-image'},
	{ src: 'images/dog-hotdog.png', alt: 'Dog with Hotdog Illustration', id: 'dog-hotdog-image'},
	{ src: 'images/dog-blue.png', alt: 'Dog Illustration', id: 'dog-blue-image'},
	{ src: 'images/cat-toy.png', alt: 'Cat With Toy Illustration', id: 'cat-toy-image', title: 'Jaskin'},
	{ src: 'images/dogs-blue.png', alt: 'Dogs Illustration', id: 'dogs-blue-image', description: 'Oil on Panel'},
	{ src: 'images/dog-white.png', alt: 'Dogs Illustration', id: 'dog-white-image', description: 'Watercolor and Ink'},
	{ src: 'images/dog-elsa.png', alt: 'Elsa The Dog Illustration', id: 'dog-elsa-image', title: 'Elsa', description: 'Acrylic on Star'},
]

export default function PortraiturePage(){
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
