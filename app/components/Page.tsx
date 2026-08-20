import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type PageProps = {
	content: ReactNode;
}

export default function Page({content}: PageProps){
	return(
  		<div className='page'>
			<Header/>
			<main className='main'>
				{content}
			</main>
			<Footer/>
		</div>
	)
}
