import React, { Component } from 'react'
import { log, warn } from '../utils/debug'
import http from '../utils/http'

import Form, { FormGroup } from '../shared/Form'

export default class TeamInputForm extends Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.handleValidForm = this.handleValidForm.bind(this)
	}
	handleFormSubmit(formData) {
		const sendPromise = new http('/api/post/addTeam.php',{method:'POST',data:formData});
		sendPromise.post(res => console.log(res))
	}
	handleValidForm(formObject) {
		delete formObject['form-submit']
		log('handleValidForm',formObject)
		this.handleFormSubmit(JSON.stringify(formObject))
	}
	render() {
		return (
			<section className='team-input-wrapper'>
				<Form formID='team-input' callback={this.handleValidForm}>
					<FormGroup>
						<label htmlFor='firstname'>First Name</label>&nbsp;
						<input type='text' id='firstname' name='firstname' placeholder='firstname' required/>
					</FormGroup>
					<FormGroup>
						<label htmlFor='lastname'>Last Name</label>&nbsp;
						<input type='text' id='lastname' name='lastname' placeholder='lastname' required/>
					</FormGroup>
					<FormGroup>
						<label htmlFor='age'>Age</label>&nbsp;
						<input type='number' id='age' name='age' placeholder='age'/>
					</FormGroup>
				</Form>
			</section>
		)
	}
}