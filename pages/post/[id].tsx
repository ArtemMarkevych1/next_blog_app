import { MainLayout } from '../../components/MainLayout'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import axios from 'axios'
import environment from '../../enviroment/enviroment'
import { PostProp } from '../../interfaces/post'


interface PostPageProps {
	post: PostProp
}

export default function Post( { post: serverPost }: PostPageProps ) {
	const router = useRouter()
	const [ post, setPost ] = useState(
		serverPost
	)

	useEffect( () => {
		const GetData = async () => {
			const result = await axios.get( `${ environment.apiUrl }/posts/${ router.query.id }` )
			setPost( result.data )
			console.log( 'result.data', result.data )
		}
		GetData()
	}, [] )

	if ( !post ) {
		return (
			<MainLayout>
				<h2>Loading...</h2>
			</MainLayout>
		)
	}
	return (
		<MainLayout>
			<h1>{ post.title }</h1>
			<hr/>
			<p>{ post.body }</p>
			<Link href={ '/' }><a>Back to all posts</a></Link>
		</MainLayout>
	)
}

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string
	}
}

Post.getInitialProps = async ( { query, req }: PostNextPageContext ) => {
	if ( !req ) {
		return { post: null }
	}
	const result = axios.get( `${ environment.apiUrl }/posts/${ query.id }` )
	return {
		result
	}
}

