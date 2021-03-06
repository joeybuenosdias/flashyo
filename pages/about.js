import React from 'react'
import axios from 'axios'

/** hooks */
import useSWR from 'swr'

async function handleFetch(url) {
	const { data } = await axios.get(url)

	return data
}

export default function About() {
	const { error, data } = useSWR('/api/cards/60424c0a0c3646c44d45de4f', handleFetch)
	console.log('data', data)

	if (error) return <div>Error loading page</div>
	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<div>
			{`About Page here: ${data.hello}`}
		</div>
	)
}
