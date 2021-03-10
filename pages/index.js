import Head from 'next/head'
import PropTypes from 'prop-types'
/** components */
import { Footer, Navigation } from '@components'

/** utils */
import { connectToDatabase } from '@util'

export default function Home({ isConnected }) {
	console.log('isConnected', isConnected)
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<h1>Flashcard App</h1>
			<Footer />
		</div>
	)
}

Home.propTypes = {
	isConnected: PropTypes.bool.isRequired,
}

export async function getServerSideProps() {
	const { client, db } = await connectToDatabase()
	const isConnected = await client.isConnected()
	const cards = await db.collection('cards').find({}).toArray()
	console.log('cards', cards)

	return {
		props: { isConnected },
	}
}
