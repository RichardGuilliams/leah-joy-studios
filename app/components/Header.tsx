import Nav from './Nav';
import Icon from './Icon';

export default function Header(){
	return(
		<header className='header'>
			<div className='header-img-container'>
				<img className='header-img' alt='leah joy portrait' src='images/artist-portrait.png' height='100px' width='100px'/>
			</div>
			<div className='header-nav'>
					<input className='checkbox' type='checkbox' id='menu-checkbox'/>
					<label className='hamburger-menu-container' htmlFor='menu-checkbox'>
						<Icon.HamburgerMenu svg='hamburger-menu' path=''/>
					</label>
					<div className='menu'>
						<label htmlFor='menu-checkbox'>
							<Icon.CircleX svg='close-menu' path=''/>
						</label>
						<Nav/>
						<label htmlFor='menu-checkbox'></label>
					</div>
				<a className='nav-link-insta' href='https://www.instagram.com/saintleahjoy/'><Icon.Instagram svg='nav-link-svg' path='link-svg-path'/></a>
			</div>
		</header>
	)
}
