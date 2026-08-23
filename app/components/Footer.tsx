import Icon from './Icon'

export default function Footer(){
	return(
		<footer className='footer'>
			<div className='footer-section'>
				<p className='footer-title'>Leah Joy Studio</p>
			</div>
			<div className='footer-section'>
				<a href='https://www.instagram.com/saintleahjoy/'>
					<Icon.Instagram svg='footer-svg' path='footer-path'/>
				</a>
			</div>
			<div className='footer-section footer-section-copyright'>
				<p className='copyright'>©2021 by Leah Joy Studio. Be kind to yourself.</p>
				<p className='footer-p'>Built by <span><a href='https://richardguilliams.io'>Richard Guilliams IO</a></span></p>
			</div>
		</footer>
	)
}
