import Icon from './Icon';

export default function Gallery({ images }: ImageListProps){
	console.log(images)
	return(
		<div className='gallery'>
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
		id: string;
	};
	description: string;
	date: string;
}

type ImageListProps = {
	images: [ GalleryImageProps ];
}

type ImageListProps = {
	images: [GalleryImageProps];
}

export const createImageList = ({ images }: ImageListProps) =>{
	console.log('images: ', images);
	return (images.map(el => {
			return <GalleryImage title={el.title ? el.title : null} src={el.src} alt={el.alt} id={el.id} description={el.description} date={el.date}/>
		}
	))
}

			//const hi = 
export function GalleryImage({ src, alt, id, data, description, date, key, title }: GalleryImageProps){
	return(
		<div className='gallery-image-container' key={key}>
			<div className='overlay'>
				<div>
				<h2 className='overlay-h2'>{title}</h2>
					<div>	
						<p className='overlay-p'>{ description }</p>
						<p className='overlay-p'>{ date }</p>
					</div>
				</div>
				<button className='overlay-button' data-id={data ? data.id : null}>
					<Icon.Share svg='overlay-button-svg' path='overlay-button-path'/>
				</button>
			</div>
			<img className='gallery-image' src={src} width='100' height='100' alt={alt}/>
		</div>
	)
}
