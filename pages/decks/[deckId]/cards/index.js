import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Cards() {
	const router = useRouter()
	return (
		<div>
			<Link href={`${router.asPath}/1234`}>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a>Edit Card</a>
			</Link>
			CARDS!!!, I will be the STUDY carosel that allows you to flip through cards
		</div>
	)
}
