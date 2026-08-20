import Icon from './Icon'

export default Form(){
	return(
		<form className='form'>
			<h2>Reach Out <span>for commissions and questions</span></h2>
			<a className='form-link' href='https://www.instagram.com/saintleahjoy/'>
				<Icon.Instagram svg='form-svg' path=''>
			</a>
			<FormInput classname='form-input' text='Name' placeholder='Enter your name here...' type='text'/>
			<FormInput classname='form-input' text='Email' placeholder='Enter your email here...' type='text'/>
			<FormInput classname='form-input' text='Name' placeholder='Type subject here...' type='text'/>
			<FormInput classname='form-input' text='Name' placeholder='Write a brief message...' type='text'/>
			
		</form>
	)
}

type FormInputProps = {
	classname: string;
	text: string;
	placeholder?: string;
	id: string;
	type?: string;
}

function FormInput({ classname, text, placeholder, id, type }){
	return(
		<div className='form-input-section'>
			<p>{text}: <span>
				<input type={type ? type : 'text'} id={id} classname={classname} placeholder={placeholder ? placeholder : null} />
			</span></p>
		</div>
	)
}
