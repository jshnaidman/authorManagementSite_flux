'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
import toastr from 'toastr';
import AuthorActions from '../../actions/authorActions';

const AuthorList = (props) => {

	const createAuthorRow = (author) => {
		return (
			<tr key={author.id}>
				<td><a href="/authors" onClick={(event) => deleteAuthor(author.id, event)}>Delete</a></td>
				<td><Link to={'/author/' + author.id}>{author.id}</Link></td>
				<td>{author.firstName} {author.lastName}</td>
			</tr>
		);
	};

	const deleteAuthor= (id, event) => {

		event.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');

	};


	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th>ID</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		</div>
	);

};

AuthorList.propTypes = {
	authors: PropTypes.array.isRequired
};

module.exports = AuthorList;