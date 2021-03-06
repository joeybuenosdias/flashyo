export const config = {
	api: {
		bodyParser: true,
	},
}

export default (req, res) => {
	console.log(req.query)
	res.send({ hello: 'world' })
}
