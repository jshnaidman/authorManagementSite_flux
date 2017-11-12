'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;

const NotFoundPage = (props) => {
	return (
		<div>
			<h1>Page Not Found</h1>
			<p>Whoops! Sorry, there is nothing to be seen here.</p>
			<p><Link to="/">Back Home</Link></p>
		</div>
	);

};

module.exports = NotFoundPage;