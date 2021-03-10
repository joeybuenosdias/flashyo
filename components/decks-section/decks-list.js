import React from 'react'
import Link from 'next/link'

/** hooks */
import { useDecksContext } from './decks-provider'

export default function DecksList() {
	const { decks } = useDecksContext()
	return (
		<div>
			<ul style={{
				listStyleType: 'none',
				padding: '0',
				margin: '0',
			}}
			>
				{decks.map((deck) => (
					<li key={deck.id}>
						<div style={{ margin: '16px' }}>
							<Link href={`/decks/${deck.name}`}>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a>{deck.name}</a>
							</Link>
							<button type="button" style={{ margin: '0 16px' }}>Edit</button>
							<button type="button">Delete</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
