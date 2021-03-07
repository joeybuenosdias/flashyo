import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const DeckContext = createContext()
export const useDeckContext = () => useContext(DeckContext)

export default function DeckProvider({ children }) {
	const [decks, setDecks] = useState([])
	const [newDeckName, setNewDeckName] = useState('')

	const newValue = {
		decks,
		setDecks,
		newDeckName,
		setNewDeckName,
	}

	return <DeckContext.Provider value={newValue}>{ children }</DeckContext.Provider>
}

DeckProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
