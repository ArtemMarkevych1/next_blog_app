import React from 'react'
import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'

export default function About() {

	const linkClickHandler = () => {
		Router.push( '/' )
	}

	return (
		<MainLayout title={ 'About Page' }>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
			<button onClick={ linkClickHandler }>
				Go back to Latest Posts
			</button>
		</MainLayout>

	)
}


