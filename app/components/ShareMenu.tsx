'use client'
import {useShare} from '../providers/ShareProvider'
import { type Dispatch, type SetStateAction, ReactNode} from 'react';
import CopyLink from './CopyLink';
import Icon from './Icon';

export default function ShareMenu(){
	const { shareData, setShareData } = useShare();
	if(!shareData) return null;

	const pageUrl = encodeURIComponent(window.location.href);
	const imageTitle = encodeURIComponent(shareData.title);
	const imageDesc = encodeURIComponent(shareData.description);
	const imageUrl = encodeURIComponent(shareData.img);

	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${imageTitle}&url=${pageUrl}`;
	const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${pageUrl}&media=${encodeURIComponent(pageUrl + imageUrl)}&description=${imageDesc}`;
	const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${pageUrl}&title=${imageTitle}&caption=${imageDesc}`;
	const emailUrl = `mailto:?subject=${imageTitle}&body=${imageDesc}%0A%0A${pageUrl}`;

	return(
		<div className='fullscreen'>
			<div className='fullscreen' onClick={() => setShareData(null)}/>
			<div className='share-menu'>
				<ul className='share-menu-ul'>
					<ListItem url={facebookUrl} icon={<Icon.Facebook svg='list-svg' path='list-path'/>}/>
					<ListItem url={twitterUrl} icon={<Icon.Twitter svg='list-svg' path='list-path'/>}/>
					<ListItem url={pinterestUrl} icon={<Icon.Pinterest svg='list-svg' path='list-path'/>}/>
					<ListItem url={tumblrUrl} icon={<Icon.Tumblr svg='list-svg' path='list-path'/>}/>
					<ListItem url={emailUrl} icon={<Icon.Email svg='list-svg' path='list-path'/>}/>
				</ul>
				<CopyLink/>
				
			</div>
		</div>
	)
}

type ListItemProps = {
	url: string;
	icon: ReactNode;
}

function ListItem({url, icon}: ListItemProps){

	return(
		<li className='list-item'>
			<a href={url} className='list-button'>
				{icon}
			</a>
		</li>
	)
}
