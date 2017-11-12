'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');
var Prompt = require('react-router-dom').Prompt;
var AuthorActions = require('../../actions/authorActions');
import AuthorStore from '../../stores/authorStore';
var Router = require('react-router-dom');

var toastr = require ('toastr');

class ManageAuthorPage extends React.Component {
	state = {
		author: { id: '', firstName: '', lastName: ''},
		errors: {},
		dirty: false
	};

	authorFormIsValid = () => {
		var formIsValid = true;
		var errorsInForm = {};
		if (this.state.author.firstName.length < 3) {
			errorsInForm.firstName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			errorsInForm.lastName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: errorsInForm});
		return formIsValid;
	}

	constructor(props) {
		super(props);
		var authorId = this.props.match.params.id;
		if (authorId) {
			this.state = {
				author: AuthorStore.getAuthorById(authorId)
			};
		}
	}

	setAuthorState = (event) => {
		this.setState({dirty: true});
		let target = event.currentTarget;
		this.setState(prevState => {
			let field = target.name;
			let value = target.value;
			const newAuthor = Object.assign({}, prevState.author);
			newAuthor[field] = value;
			return {author: newAuthor};
		});
	};

	saveAuthor = (event) => {
		event.preventDefault();

		if (!this.authorFormIsValid()) {
			return;
		}
		
		if (this.state.author.id) {
			AuthorActions.updateAuthor(this.state.author);
		} else {
			AuthorActions.createAuthor(this.state.author);
		}

		this.setState({dirty: false}, () => {
			this.props.history.push('/authors');
		});
		toastr.success('Author saved');
	};

	render () {
		return ([
			<h1 key='ManageAuthorsHeader'>Manage Author</h1>,
			<AuthorForm 
				key='AuthorForm'
				author={this.state.author}
				onChange={evt => this.setAuthorState(evt)}
				onSave={this.saveAuthor} 
				errors={this.state.errors} />,
			<Prompt 
				key='prompt'
				when={this.state.dirty} 
				message='Are you sure you want to leave without submitting?'
			/>
		]);
	}
}; 

module.exports = ManageAuthorPage;