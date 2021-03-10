import PropTypes from 'prop-types'

/** components */
import {
	Footer,
	Navigation,
	DecksSection,
} from '@components'

/** utils */
import { connectToDatabase, objectIdToString } from '@util'

export default function Decks({ decks }) {
	return (
		<div className="container">
			<Navigation />
			<DecksSection decks={decks} />
			<Footer />
		</div>
	)
}

Decks.propTypes = {
	decks: PropTypes.array.isRequired,
}

export async function getServerSideProps() {
	const { db } = await connectToDatabase()
	const ssrDecks = await db.collection('taxonomies').find({}).toArray()

	const finalSsrDecks = ssrDecks.map((deck) => ({
		// eslint-disable-next-line no-underscore-dangle
		id: objectIdToString(deck._id),
		name: deck.name,
	}))

	return {
		props: {
			decks: finalSsrDecks,
		},
	}
}
