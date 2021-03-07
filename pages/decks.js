import Head from 'next/head'
import PropTypes from 'prop-types'
/** components */
import { Footer, Navigation, DeckForm } from '@components'
import DeckProvider from '../components/deck-form/deck-provider'

/** utils */
import { connectToDatabase } from '../util/mongodb'

export default function Decks({ isConnected }) {
	console.log('isConnected', isConnected)
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<h1>Flashcard App</h1>
			<DeckProvider>
				<DeckForm />
			</DeckProvider>
			<Footer />
		</div>
	)
}

Decks.propTypes = {
	isConnected: PropTypes.bool.isRequired,
}

export async function getServerSideProps() {
	const { client, db } = await connectToDatabase()
	const isConnected = await client.isConnected()
	const taxonomies = await db.collection('taxonomies').find({}).toArray()
	console.log('cards', taxonomies)

	return {
		props: { isConnected },
	}
}
