import React, { useState } from 'react'
import axios from 'axios'
import environment from '../../enviroment/enviroment'
import Link from 'next/link'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles( ( theme ) => ( {
	root: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 650,
	},
	container: {
		border: '1px solid red'
	},
	paper: {
		marginTop: theme.spacing( 8 ),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing( 1 ),
	},
	submit: {
		margin: theme.spacing( 3, 0, 2 ),
	},
} ) )

const NewPost = () => {
	const classes = useStyles()

	const [ customerPost, setCustomerPost ] = useState(
		{ title: '', body: '' }
	)
	const [ isSubmitted, setIsSubmitted ] = useState( false )

	const handleChange = ( event ) => {
		setCustomerPost( { ...customerPost, [event.target.name]: event.target.value } )
	}

	const handleSubmit = ( e ) => {
		e.preventDefault()
		axios.post( `${ environment.apiUrl }/posts`, customerPost )
			.then( function ( response ) {
				console.log( response )
				if ( response.status === 201 ) {
					setIsSubmitted( true )
				}
			} )
			.catch( function ( error ) {
				console.log( error )
			} )
	}

	if ( isSubmitted ) {
		return (
			<>
				<p>Your post is published!</p>
				<Link href={ '/' }><a>Back to Posts</a></Link>
			</>
		)
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={ classes.paper }>
				<Typography component="h1" variant="h5">
					Create your post here
				</Typography>
				<form className={ classes.form } noValidate onSubmit={ handleSubmit }>
					<div>
						<TextField id="standard-basic"
								   label="Write the title of post here"
								   name="title"
								   value={ customerPost.title }
								   onChange={ handleChange }
								   variant="outlined"
								   margin="normal"
								   fullWidth
								   autoFocus/>

						<TextField
							id="outlined-multiline-static"
							label="Write the body of post here"
							name="body"
							fullWidth
							multiline
							rows={ 4 }
							variant="outlined"
							value={ customerPost.body }
							onChange={ handleChange }
						/>
					</div>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={ classes.submit }
					>
						Create Post
					</Button>
						<p>or</p>
						<Link href={ '/' }><a>Back to Posts</a></Link>
				</form>
			</div>
		</Container>
	)
}
export default NewPost
