import { ObjectID } from 'mongodb'
import { connectToDatabase } from '@util'

export const config = {
	api: {
		bodyParser: true,
	},
}

export default async (req, res) => {
	const { db } = await connectToDatabase()
	// eslint-disable-next-line new-cap
	const cardId = new ObjectID.createFromHexString(req.query.cardId)

	switch (req.method) {
	case 'PUT': {
		const cards = await db.collection('cards')
		const card = await cards.findOne(cardId)

		res.send(card)
	}

		break
	default: {
		const cards = await db.collection('cards')
		const card = await cards.findOne(cardId)

		res.send(card)
	}
	}
}
