'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;
var Redirect = require('react-router-dom').Redirect;
var Route = require('react-router-dom').Route;
var Router = require('react-router-dom').BrowserRouter;
var Link = require('react-router-dom').Link;

var Header = require('./components/common/header');
var Home = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./notFoundPage');
import AuthorStore from './stores/authorStore';


window.$ = window.jQuery = require('jquery');


class App extends React.Component {
	render () {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/authors' component={AuthorPage} />
						<Route exact path='/about' component={AboutPage} />
						<Route exact path='/addAuthor' component={ManageAuthorPage} />
						<Route exact path='/author/:id' component={ManageAuthorPage} />
						<Redirect exact from='/about-us' to='/about'/>
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById('main'));

