import React from 'react'
import Container from './Container'

export default function Header() {
	return (
		<header>
			<Container>
				<div><p>adamkeyes</p></div>
				<nav>
					<ul>
						<li><a href="#">Github</a></li>
						<li><a href="#">Frontend Mentor</a></li>
						<li><a href="#">LinkedIn</a></li>
						<li><a href="#">Twitter</a></li>
					</ul>
				</nav>
			</Container>
		</header>
	)
}
