export default function Nav(){
	return(
		<nav className='header-nav'>
			<ul className='header-nav-ul'>
				<ListItem href='/' text='Home'/>
				<ListItem href='/the-hidden-thicket' text='The Hidden Thicket'/>
				<ListItem href='/portraiture' text='Portraiture'/>
				<ListItem href='/other-works' text='Other Works'/>
			</ul>
		</nav>
	)
}

type ListItemProps = {
	href: string;
	text: string;
}

function ListItem({href, text}: ListItemProps){
	return(
		<li className='header-nav-item'>
			<a className='header-link' href={ href }>{ text }</a>
		</li>
	)
}
