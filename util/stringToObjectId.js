import { ObjectID } from 'mongodb'

// String -> ObjectID
export default function stringToObjectId(objId) {
	// eslint-disable-next-line new-cap
	const newId = new ObjectID.createFromHexString(objId)
	console.log('newId', newId)

	return newId
}
