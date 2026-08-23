import { ReactNode } from 'react';
import Icon from './components/Icon';
import Image from "next/image";
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';

const images = [
	{ src: 'images/mouse-family.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/starry-lake.png', alt: 'moonlit lake', id: 'moonlit-lake-image', title: 'Stressless',description: '36" Acrylic, Ink', date: '2017' },
	{ src: 'images/dog-rabbit.png', alt: 'dog and rabbit illustration', id: 'dog-rabbit-image', title: 'For Hannah', description: 'Digital', date: '2018' },
	{ src: 'images/concept-art.png', alt: 'dnd concept art', id: 'concept-art-image', title: 'DND Coloring Page', description: 'Ink', date: '2025' }
]

export default function Home() {
  	return (
  		<div className='page'>
			<Header/>
			<main>
				<Hero/>
				<Gallery images={images}/>
				<AboutSection/>
				<ContactSection/>
			</main>
			<Footer/>
		</div>
  	);
}

function Hero(){
	return(
		<div className='section hero'>
			<h1>Leah Joy<span>Illustrator and Storyteller</span></h1>
			<img className='hero-image' src='/images/mouse-pot.png' width='100px' height='100px' alt='mouse-house'/>
		</div>
	)
}


function AboutSection(){
	return(
		<div className='section about-section'>
			<div>
				<p>Cincinnati based illustrator and creator of the world of The Hidden Thicket. Specializes in storybook illustration using watercolors, oils and digital media. </p>
				<p>Open for commissions and freelance work</p>
			</div>
		</div>
	)
}

function ContactSection(){
	return(
		<div className='section section-contact'>
			<img className='contact-image' src='/images/leah-at-work.png' width='100px' height='100px' alt='artist Photo'/>
			<div className='form-container'>
				<h2>Reach Out</h2>
				<p>For Commissions and Inquiries.</p>
				<ContactForm/>
			</div>
		</div>
	)
}

function ContactForm(){
	return(
		<form>
			<div className='form-section'>
				<input type='text' placeholder='Name' id='input-name'/>
				<input type='text' placeholder='Email' id='input-email'/>
			</div>
			<div className='form-section'>
				<input type='text' placeholder='Subject' id='input-subject'/>
			</div>
			<div className='form-section'>
				<input type='text-area' placeholder='Message' id='input-name'/>
			</div>
			<button className='form-button' type='submit'>Submit</button>
		</form>
	)
}
