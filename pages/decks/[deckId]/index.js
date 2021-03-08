import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DeckId() {
	const router = useRouter()
	console.log('router', router)
	return (
		<div>
			<Link href={`${router.asPath}/cards`}>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a>Study</a>
			</Link>
			DeckId Page, I will show info about deck and start a STUDY carousel
		</div>
	)
}
