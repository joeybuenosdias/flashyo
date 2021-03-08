import { connectToDatabase } from '../../util/mongodb'

export const config = {
	api: {
		bodyParser: true,
	},
}

export default async (req, res) => {
	const { db } = await connectToDatabase()
	switch (req.method) {
	/** TODO: Add correct post request */
	case 'POST': {
		const cards = await db
			.collection('cards')
			.find({})
			.toArray()

		res.send(cards)
		break
	}
	default: {
		const cards = await db
			.collection('cards')
			.find({})
			.toArray()

		res.send(cards)
	}
	}
}
