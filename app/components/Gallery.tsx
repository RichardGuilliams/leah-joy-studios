'use client';
import { useShare } from '../providers/ShareProvider';
import Icon from './Icon';
import {useState} from 'react';

type ShareData = {
	url: string;
}

export default function Gallery({ images, classname, id }: GalleryProps){
	
	return(
		<div className={'gallery' + ' ' + classname}>
			{createImageList({ images })}
		</div>
	)
}

type GalleryImageProps = {
	title?: string;
	src: string;
	alt: string;
	id: string;
	data?: {
		id?: string;
	};
	description?: string;
	date?: string;
}

type GalleryProps = {
	images: GalleryImageProps[];
	classname?: string;
	id?: string;
}

export const createImageList = ({ images, classname, id }: GalleryProps) =>{
	return (images.map((el, i) => {
			return <GalleryImage key={`gallery-image-${i}`} title={el.title} src={el.src} alt={el.alt} id={el.id} description={el.description} date={el.date}/>
		}
	))
}

export function GalleryImage({ src, alt, id, data, description, date, title }: GalleryImageProps){

	const { shareData, setShareData } = useShare();
	const [ menuActive, setMenuActive ] = useState(null);

	const handleClick = (img: string, title: string, description: string) => {
		setShareData({
			description: description,
			title: title,
			img: img

		})
		console.log(title, description, img)
	}

	return(
		<div className='gallery-image-container'>
			<div className='overlay'>
				<div>
				<h2 className='overlay-h2'>{title}</h2>
					<div>	
						<p className='overlay-p'>{ description }</p>
						<p className='overlay-p'>{ date }</p>
					</div>
				</div>
				<button onClick={() => setShareData({ description: description ? description : '', title: title ? title : '', img: src })} className='overlay-button' data-id={data ? data.id : null}>
					<Icon.Share svg='overlay-button-svg' path='overlay-button-path'/>
				</button>
			</div>
			<img className='gallery-image' src={src} width='100' height='100' alt={alt}/>
		</div>
	)
}
