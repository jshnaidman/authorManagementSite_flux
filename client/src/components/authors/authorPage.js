'use strict';

var React = require('react');
// var AuthorStore = require('../../stores/authorStore').default;
import AuthorStore from '../../stores/authorStore';
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');
var Link = require('react-router-dom').Link;

class AuthorPage extends React.Component {

	state = {
		authors: AuthorStore.getAllAuthors()
	};

	constructor() {
		super();
	};

	_onChange = (evt) => {
		this.setState({authors: AuthorStore.getAllAuthors()});
	};

	componentWillMount = () => {
		AuthorStore.addChangeListener(this._onChange);
	};

	componentWillUnmount = () => {
		AuthorStore.removeChangeListener(this._onChange);
	};


	render () {
		
		return ([
			<h1 key='AuthorsHeader'>Authors</h1>,
			<Link key='toManageAuthors' to="/addAuthor" className="btn btn-default">Add Author</Link>,
			<AuthorList key='AuthorList' authors={this.state.authors} />
		]);
	}
};

module.exports = AuthorPage;