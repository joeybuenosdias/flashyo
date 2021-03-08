import Head from 'next/head'
import PropTypes from 'prop-types'
import { ObjectID } from 'mongodb'

/** components */
import {
	Footer,
	Navigation,
	DecksSection,
} from '@components'

/** utils */
import { connectToDatabase } from '../../util/mongodb'

export default function Decks({ decks }) {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
		id: ObjectID(deck._id).toString(),
		name: deck.name,
	}))

	return {
		props: {
			decks: finalSsrDecks,
		},
	}
}
