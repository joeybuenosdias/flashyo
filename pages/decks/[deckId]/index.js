import React from 'react'
import PropTypes from 'prop-types'
// import { ObjectID } from 'mongodb'

/** components */
import Link from 'next/link'
import { Navigation } from '@components'

/** hooks */
import { useRouter } from 'next/router'

/** utils */
import { connectToDatabase, objectIdToString } from '@util'

export default function DeckId({ deck }) {
	const router = useRouter()

	return (
		<div>
			<Navigation />
			<h1>{deck.name}</h1>
			<Link href={`${router.asPath}/cards`}>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a>Study</a>
			</Link>
			DeckId Page, I will show info about deck and start a STUDY carousel
		</div>
	)
}

DeckId.propTypes = {
	deck: PropTypes.array.isRequired,
}

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase()
	// eslint-disable-next-line new-cap

	const taxonomies = await db.collection('taxonomies')
	const ssrDeck = await taxonomies.findOne({ name: context.query.deckId })

	const finalSsrDeck = {
		name: ssrDeck.name,
		// eslint-disable-next-line no-underscore-dangle
		id: objectIdToString(ssrDeck._id),
	}

	return {
		props: {
			deck: finalSsrDeck,
		},
	}
}
