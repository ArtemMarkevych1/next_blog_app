import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import { PostProp } from '../interfaces/post'
import api from '../api/api'
import { MainLayout } from '../components/MainLayout'

interface PostsPageProps {
	posts: PostProp[]
}

export default function Index( { posts: serverPosts }: PostsPageProps ) {

	const [ posts, setPosts ] = useState( [] )

	const setPostsHandler = () => {
		api.getPosts().then( res => {
				setPosts( res.data )
			}
		).catch( err => console.error( err ) )
	}

	useEffect( () => {
		setPostsHandler()
	}, [] )

	return (
		<Container>
			<MainLayout>
				<Head>
					<title>
						Posts
					</title>
				</Head>
				<h1>Latest Posts</h1>
				<Link href={ '/posts/new' }><a>Create new Post</a></Link>
				<ul>
					{ posts.map( post => {
							return (
								<li key={ post.id }>
									<Link href={ `/post/[id]` } as={ `/post/${ post.id }` }>
										<a>
											{ post.title }
										</a>
									</Link>
								</li>
							)
						}
					) }
				</ul>
			</MainLayout>
		</Container>
	)
}

const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: ${ props => props.theme.primary };
`

