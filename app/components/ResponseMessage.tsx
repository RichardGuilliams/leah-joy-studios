type ResponseMessageProps = {
	classname: string;
	text: string
}

export default function ResponseMessage({ classname, text }: ResponseMessageProps){
	return(
		<div className={'response-message' + ' ' + classname} id={'response-message'}>
			<p>{text}</p>
		</div>
	)
}
