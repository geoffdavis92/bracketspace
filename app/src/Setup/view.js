import React, { Component } from 'react'

import TeamInputForm from './TeamInputForm'

import '../css/views/setup.css'

export default class Setup extends Component {
	render() {
		return (
			<article id='view-setup'>
				<h1>Setup</h1>
				<TeamInputForm/>
			</article>
		)
	}
}