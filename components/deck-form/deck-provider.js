import {
	createContext,
	useContext,
	useState,
	useMemo,
} from 'react'
import PropTypes from 'prop-types'

const DeckContext = createContext()
export const useDeckContext = () => useContext(DeckContext)

export default function DeckProvider({ children, decks: ssrDecks }) {
	const [decks, setDecks] = useState(ssrDecks)
	const [newDeckName, setNewDeckName] = useState('')

	const newValue = useMemo(() => ({
		decks,
		setDecks,
		newDeckName,
		setNewDeckName,
	}), [
		decks,
		setDecks,
		newDeckName,
		setNewDeckName,
	])

	return <DeckContext.Provider value={newValue}>{ children }</DeckContext.Provider>
}

DeckProvider.propTypes = {
	children: PropTypes.node.isRequired,
	decks: PropTypes.array.isRequired,
}
