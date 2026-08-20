import Icon from './Icon'

export default function Form(){
	return(
		<form className='form'>
			<h2>Reach Out <span>for commissions and questions</span></h2>
			<a className='form-link' href='https://www.instagram.com/saintleahjoy/'>
				<Icon.Instagram svg='form-svg' path=''/>
			</a>
			<FormInput classname='form-input' text='Name' placeholder='Enter your name here...'/>
			<FormInput classname='form-input' text='Email' placeholder='Enter your email here...'/>
			<FormInput classname='form-input' text='Subject' placeholder='Type subject here...'/>
			<FormInput classname='form-input' text='Email' placeholder='Write a brief message...'/>
			
		</form>
	)
}

type FormInputProps = {
	classname: string;
	text: string;
	placeholder?: string;
	id?: string;
	type?: string;
}

function FormInput({ classname, text, placeholder, id, type }: FormInputProps){
	return(
		<div className='form-input-section'>
			<p>{text}: <span>
				<input type={type ? type : 'text'} id={id ? id : `input-${text.toLowerCase()}`} className={classname} placeholder={placeholder ? placeholder : undefined} />
			</span></p>
		</div>
	)
}
