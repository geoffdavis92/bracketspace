import React, { Component } from 'react'

import { warn } from '../utils/debug'

export function FormGroup (props) {
	const { children, id } = props
	return (
		<div id={id ? id : null} className='form-group'>
			{children}
		</div>
	)
}

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.formSubmission = this.formSubmission.bind(this)
		this.state = {
			fields: [],
			requiredFields: []
		}
	}
	componentDidMount() {
		const newFields = [],
			  newRequiredFields = [];
		this.props.children.forEach(field => {
				const { type, props } = field,
					  { required, name } = props;
				if (type === 'input') {
					if (required) {
						newFields.push(name)
						newRequiredFields.push(name)
					} else {
						newFields.push(name)
					}
				}
			})
		this.setState({
			fields: newFields,
			requiredFields: newRequiredFields
		})
	}
	validateForm(id) {
		const requiredInputs = [].slice.call(document.querySelectorAll(`#${id} input:required`)),
			  checkboxesAndRadios = [],
			  strings = [],
			  invalidList = [];
		requiredInputs.forEach(el => {
			if (el.type === 'checkbox' || el.type === 'radio') {
				checkboxesAndRadios.push(el)
			} else {
				strings.push(el)
			}
		});
		if (checkboxesAndRadios.length > 0) {
			checkboxesAndRadios.forEach((el,i,arr) => {
				const { isChecked } = el;
				if (!isChecked) {
					invalidList.push(el)
				}
			});
		}
		if (strings.length > 0) {
			strings.forEach(el => {
				const { value } = el;
				if (value === '' || value === undefined) {
					invalidList.push(el)
				}
			})
		}
		return {
			formIsValid: invalidList.length > 0 ? false : true,
			invalidList: invalidList
		}
	}
	showErrors(invalidList) {
		const withErrors = invalidList.map(el => {
			const classList = el.getAttribute('class')
			if (classList && classList.indexOf(/has\-error/g)) {
				return el;
			} else {
				el.setAttribute('class',`${classList ? `${classList} ` : ''}has-error`)
			}
			return el;
		})
		warn('invalids:',withErrors)
	}
	formSubmission(e) {
		e.preventDefault();
		const { formID, callback } = this.props,
			  formInputs = [].slice.call(document.querySelectorAll(`#${formID} input`)),
			  formObject = {},
			  { formIsValid, invalidList } = this.validateForm(formID)
		if (formIsValid) {
			formInputs.forEach(el => formObject[el.name]= el.value )
			callback(formObject);
		} else {
			this.showErrors(invalidList);
			warn(`There are ${invalidList.length} invalid field items.`)
		}
	}
	render() {
		const { formID, action, onSubmit } = this.props
		return (
			<form id={formID ? formID : null} action={action ? action : null}>
				{this.props.children}
				<input type="submit" name='form-submit' id={`${formID ? `${formID}-` : ``}form-submit`} value={this.props.submitVal ? this.props.submitVal : 'Submit'} onClick={onSubmit ? onSubmit : this.formSubmission}/>
			</form>
		)
	}
}