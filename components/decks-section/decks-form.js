import React from 'react'
import axios from 'axios'

/** hooks */
import { useDecksContext } from './decks-provider'

/** Add/Edit Taxonomy */
export default function DecksForm() {
	const {
		setDecks,
		newDeckName,
		setNewDeckName,
	} = useDecksContext()

	function handleChange(e) {
		setNewDeckName(e.target.value)
	}

	function handleAddDeck() {
		axios.post('/api/decks', {
			name: newDeckName,
		}).then((res) => {
			setDecks(res.data)
			setNewDeckName('')
		})
	}

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<input onChange={handleChange} value={newDeckName} />
				<button onClick={handleAddDeck} type="button">
					Submit
				</button>
			</form>
		</div>
	)
}
