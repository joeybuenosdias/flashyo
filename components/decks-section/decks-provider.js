import {
	createContext,
	useContext,
	useState,
	useMemo,
} from 'react'
import PropTypes from 'prop-types'

const DecksContext = createContext()
export const useDecksContext = () => useContext(DecksContext)

export default function DecksProvider({ children, decks: ssrDecks }) {
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

	return <DecksContext.Provider value={newValue}>{ children }</DecksContext.Provider>
}

DecksProvider.propTypes = {
	children: PropTypes.node.isRequired,
	decks: PropTypes.array.isRequired,
}
