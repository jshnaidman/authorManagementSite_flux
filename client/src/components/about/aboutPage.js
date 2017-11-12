'use strict';

const React = require('react');
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;

const About = (props) => {
	return (
		<div>
			<h1>About</h1>
			<p> This application uses the following technologies: </p>
			<ul>
				<li>React</li>
				<li>React Router</li>
				<li>Flux</li>
				<li>Node</li>
				<li>Gulp</li>
				<li>Browserify</li>
				<li>Bootstrap</li>
			</ul>
		</div>
	); 
};

module.exports = About;