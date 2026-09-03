'use client'
import Page from './components/Page'
import Icon from './components/Icon';
import Image from "next/image";
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ShareMenu from './components/ShareMenu'
import { ShareProvider, useShare } from './providers/ShareProvider';
import { contactRequest } from './lib/api/request';
import {
  useState,
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
} from 'react';

const images = [
	{ src: 'images/mouse-family.png', alt: 'mouse family illustration', id: 'mouse-family-image', title: 'Little Sister', description: '7" * 9" Watercolor, Ink', date: '2016' },
	{ src: 'images/starry-lake.png', alt: 'moonlit lake', id: 'moonlit-lake-image', title: 'Stressless',description: '36" Acrylic, Ink', date: '2017' },
	{ src: 'images/dog-rabbit.png', alt: 'dog and rabbit illustration', id: 'dog-rabbit-image', title: 'For Hannah', description: 'Digital', date: '2018' },
	{ src: 'images/concept-art.png', alt: 'dnd concept art', id: 'concept-art-image', title: 'DND Coloring Page', description: 'Ink', date: '2025' }
]

type submissionResponseMessage = 'success' | 'failure' | null;
type submissionProps = {
	setShowMessage: Dispatch<SetStateAction<submissionResponseMessage>>;
}



export default function HomePage(){
	const [ showMessage, setShowMessage ] = useState<submissionResponseMessage>(null);
	return(
		<Page content={
			<div>
				<Hero/>
				<Gallery classname='home-gallery' images={images}/>
				<AboutSection/>
				<ContactSection setShowMessage={setShowMessage}/>
			</div>
		}/>
	)
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

function ContactSection({setShowMessage}: submissionProps){
	return(
		<div className='section section-contact'>
			<img className='contact-image' src='/images/leah-at-work.png' width='100px' height='100px' alt='artist Photo'/>
			<div className='form-container'>
				<h2>Reach Out</h2>
				<p>For Commissions and Inquiries.</p>
				<ContactForm setShowMessage={setShowMessage}/>
			</div>
		</div>
	)
}

type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
	company: string;
}

function ContactForm({ setShowMessage }: submissionProps){
	const [ loading, setLoading ] = useState(false);
	
	const [ formData, setFormData ] = useState<ContactFormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
		company: ''
	})

	const handleChange = createHandleChange(setFormData);

	return(
		<form>
			<div className='form-section'>
				<input type='name' name='name' placeholder='Name' id='input-name' onChange={handleChange}/>
				<input type='email' name='email' placeholder='Email' id='input-email' onChange={handleChange}/>
			</div>
			<div className='form-section'>
				<input type='text' name='subject' placeholder='Subject' id='input-subject' onChange={handleChange}/>
			</div>
			<div className='form-section'>
				<textarea name='message' placeholder='Type Your Message Here...' id='input-name' onChange={handleChange}/>
			</div>
			<input className='none' name='company' type='text-area' placeholder='Company' id='input-company' onChange={handleChange}/>
			<button className='form-button' onClick={() => handleClick(setLoading, setShowMessage, formData)} disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
		</form>
	)
}

function createHandleChange(
  setFormData: Dispatch<SetStateAction<ContactFormData>>
): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> {
  return (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
}

async function handleClick(
  setLoading: Dispatch<SetStateAction<boolean>>,
  setShowMessage: Dispatch<
    SetStateAction<submissionResponseMessage>
  >,
  formData: ContactFormData
): Promise<void> {
  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    CompleteRequest(setShowMessage, 'failure');
    return;
  }

	if(formData.company !== ''){
		CompleteRequest(setShowMessage, 'failure')
		return;
	}

  try {
    setLoading(true);
	console.log(formData);
    await contactRequest(formData);

    console.log('Successfully sent an email');

    CompleteRequest(setShowMessage, 'success');
  } catch (error: unknown) {
    CompleteRequest(setShowMessage, 'failure');
    console.error('Request failed', error);
  } finally {
    setLoading(false);
  }
}

function CompleteRequest(setShowMessage: Dispatch<SetStateAction<submissionResponseMessage>>, status: submissionResponseMessage){
	setTimeout(() => {
		setShowMessage(status);
		setTimeout(() => {
			setShowMessage(null);
		}, 3000)
	}, 1000)
}
