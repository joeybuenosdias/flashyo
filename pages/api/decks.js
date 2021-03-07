import { connectToDatabase } from '../../util/mongodb'

export const config = {
	api: {
		bodyParser: true,
	},
}

export default async (req, res) => {
	const { db } = await connectToDatabase()

	switch (req.method) {
	case 'POST': {
		await db
			.collection('taxonomies')
			.insertOne({ name: req.body.name })

		const decks = await db
			.collection('taxonomies')
			.find({})
			.toArray()

		res.send(decks)
		break
	}
	default: {
		const decks = await db
			.collection('taxonomies')
			.find({})
			.toArray()

		res.send(decks)
	}
	}
}
