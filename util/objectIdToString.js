import { ObjectID } from 'mongodb'

// ObjectID -> String
export default function objectIdToString(objId) {
	// eslint-disable-next-line no-underscore-dangle
	return ObjectID(objId._id).toString()
}
