import axios from 'axios'

import { COMMENTS_URL, POSTS_URL } from '../constants/constants'

export default class Api {
	static getPosts() {
		return axios.get( `${ POSTS_URL }` )
	}

	static postComments() {
		return axios.post( `${ COMMENTS_URL }` )
	}

	static getExistingPost(id) {
		return axios.get(`${ POSTS_URL }/${id}`)
	}
}
