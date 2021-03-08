import React from 'react'

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
							<a href="#changeme">{deck.name}</a>
							<button type="button" style={{ margin: '0 16px' }}>Edit</button>
							<button type="button">Delete</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
