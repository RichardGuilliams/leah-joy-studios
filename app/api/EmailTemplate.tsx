type ContactProps = {
	name: string;
	subject: string;
	email: string;
	message: string;
}

const Contact = ({name, subject, email, message}: ContactProps) => {
	return(
		<div>
			<h2>Contact Form Submission</h2>
			<p><strong>Name</strong>: {name}</p>
			<p><strong>Email</strong>: {email}</p>
			<p><strong>Subject</strong>: {subject}</p>
			<hr/>
			<h3><strong>Message</strong>: </h3>
			<p>{message}</p>
			<hr/>
		</div>
	)
}

const EmailTemplate = {
	Contact
};

export default EmailTemplate;
