import React from 'react'
import PropTypes from 'prop-types'

/** components */
import DecksProvider from './decks-provider'
import DecksList from './decks-list'
import DecksForm from './decks-form'

export default function DecksSection({ decks }) {
	return (
		<div>
			<h1>Decks Section</h1>
			<DecksProvider decks={decks}>
				<DecksForm />
				<DecksList />
			</DecksProvider>
		</div>
	)
}

DecksSection.propTypes = {
	decks: PropTypes.array.isRequired,
}
