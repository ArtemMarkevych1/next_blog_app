import Link from 'next/link'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import React from 'react'

export function MainLayout( { children, title = 'Next app' } ) {
	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name="keywords" content="next, js"/>
				<meta name="description" content="this is test task"/>
				<meta charSet="UTF-8"/>
			</Head>
			<Container maxWidth="lg">
				<nav>
					<Link href={ '/' }><a>Home</a></Link>
					<Link href={ '/about' }><a>About</a></Link>
				</nav>
			</Container>
			<main>
				{ children }
			</main>
			<style jsx>
				{
					`
                    nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center
                    }
                    
                    nav a {
                    color: #fff;
                    text-decoration: none;
                    }
                    
                    main{
                    margin-top: 60px;
                    padding: 1rem
                    }
`
				}
			</style>
		</>

	)
}
