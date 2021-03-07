import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { useDeckContext } from './deck-provider'

/** Add/Edit Taxonomy */
export default function DeckForm() {
	const {
		setDecks,
		newDeckName,
		setNewDeckName,
	} = useDeckContext()

	function handleChange(e) {
		setNewDeckName(e.target.value)
	}

	async function handleClick() {
		if (!newDeckName) {
			console.log('Please enter a name')
		} else {
			const { data } = await axios.post('/api/decks', {
				name: newDeckName,
			})
			/** update new list of decks on the right side */
			console.log('DATA', data)
			setDecks(data)
		}
	}

	const { data: newForm, error } = useSWR('/decks', handleClick)

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<input onChange={handleChange} value={newDeckName} />
				<button onClick={handleClick} type="button">
					Submit
				</button>
			</form>
		</div>
	)
}
