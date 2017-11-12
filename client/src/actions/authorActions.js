'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorAPI = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var Dispatcher = require('../dispatcher/appDispatcher');


var AuthorActions = {

	createAuthor(author) {
		var newAuthor = AuthorAPI.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

	updateAuthor(author) {
		var updatedAuthor = AuthorAPI.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE,
			author: updatedAuthor
		});
	},

	initAuthors() {
		var authors = AuthorAPI.getAllAuthors();

		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: authors
			}
		});
	},

	deleteAuthor(id) {
		AuthorAPI.deleteAuthor(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE,
			id: id
		});
	}
};

module.exports = AuthorActions;