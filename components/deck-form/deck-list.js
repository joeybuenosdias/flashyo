import React from 'react'

/** hooks */
import { useDeckContext } from './deck-provider'

export default function DeckList() {
	const { decks } = useDeckContext()
	return (
		<div>
			<ul>
				{decks.map((deck) => (
					<li key={deck.id}>
						{deck.name}
					</li>
				))}
			</ul>
		</div>
	)
}
