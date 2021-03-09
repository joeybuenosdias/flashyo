import React from 'react'

/** components */
import Link from 'next/link'

const links = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/about',
		name: 'About',
	},
	{
		path: '/decks',
		name: 'Decks',
	},
]

export default function Navigation() {
	return (
		<nav>
			<ul style={{ padding: '0px' }}>
				{links.map((link) => (
					<Link href={link.path}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a style={{ marginRight: '16px' }}>{link.name}</a>
					</Link>
				))}
			</ul>
		</nav>
	)
}
