// 'use strict';

// var React = require('react');
// var Header = require('./common/header');
// var Routes = require('../routes');


// var Route = require('react-router-dom').Route;
// var Switch = require('react-router-dom').Switch;
// var Redirect = require('react-router-dom').Redirect;

// var Home = require('./homePage');
// var AuthorPage = require('./authors/authorPage');
// var ManageAuthorPage = require('./authors/manageAuthorPage');
// var AboutPage = require('./about/aboutPage');
// var NotFoundPage = require('../notFoundPage');



// window.$ = window.jQuery = require('jquery');


// class App extends React.Component {
// 	render () {
// 		return (
// 			<div>
// 				<Header />
// 				<Switch>
// 					<Route exact path='/' component={Home}/>
// 					<Route path='/authors' component={AuthorPage}/>
// 					<Route path='/about' component={AboutPage}/>
// 					<Route path='/addAuthor' component={ManageAuthorPage}/>
// 					<Redirect from='/about-us' to='/about'/>

// 					<Route component={NotFoundPage} />
// 				</Switch>
// 			</div>
// 		);
// 	}
// };

// module.exports = App;