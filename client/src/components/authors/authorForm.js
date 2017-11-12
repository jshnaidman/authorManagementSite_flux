'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var Input = require('../common/textInput');
var SaveButton = require('../common/saveButton');

const AuthorForm = (props) => {
	return (
		<form>
			<Input
				name='firstName'
				label='First Name'
				value={props.author.firstName}
				key='4'
				error={props.errors.firstName}
				onChange={evt => props.onChange(evt)} />
			<br/>	
			<Input
				name='lastName'
				label='Last Name'
				value={props.author.lastName}
				key='5'
				error={props.errors.lastName}
				onChange={evt => props.onChange(evt)} />

			<SaveButton value='save' 
				classNames='btn btn-default' 
				onSave={props.onSave}
				href='/authors' />
		</form>
	);
};

AuthorForm.propTypes = {
	author: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object
};

module.exports = AuthorForm;