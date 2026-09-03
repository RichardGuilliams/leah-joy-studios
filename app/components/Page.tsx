import { ReactNode } from 'react';
import { ShareProvider, useShare } from '../providers/ShareProvider';
import ShareMenu from './ShareMenu'
import Header from './Header';
import Footer from './Footer';

type PageProps = {
	content: ReactNode;
}

export default function Page({content}: PageProps){

	return(
  		<div className='page'>
			<ShareProvider>
				<ShareMenu/>
				<Header/>
				<main className='main'>
						{content}
				</main>
				<Footer/>
			</ShareProvider>
		</div>
	)
}
