'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var _ = require('lodash');
import AuthorActions from '../actions/authorActions';


var _authors = [];
var AuthorStoreInstance;

class AuthorStore extends EventEmitter {

	constructor(props) {
		super(props);
	}

	init() {
		AuthorActions.initAuthors();
		this.emitChange();
	}

	addChangeListener = (cb) => {
		this.on(CHANGE_EVENT, cb);
	}

	removeChangeListener = (cb) => {
		this.removeListener(CHANGE_EVENT, cb);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getAuthorById(id){
		return _.find(_authors, {id: id});
	}

	getAllAuthors() {
		return _authors;
	}

	addAuthor(author) {
		_authors.push(author);
		this.emitChange();
	}

	setAuthors(authors) {
		_authors = authors;
	}

	updateAuthor(author) {
		var existingAuthor = _.find(_authors, {id: author.id});
		var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
		_authors.splice(existingAuthorIndex,1,author);
		this.emitChange();
	}

	deleteAuthor(id) {
		_.remove(_authors, (author) => {
			return author.id === id;
		});
		this.emitChange();
	}

};


AuthorStoreInstance = new AuthorStore();

Dispatcher.register((action) => {
	switch(action.actionType) {
		case ActionTypes.CREATE_AUTHOR:
			AuthorStoreInstance.addAuthor(action.author);
			break;

		case ActionTypes.INITIALIZE:
			AuthorStoreInstance.setAuthors(action.initialData.authors);
			break;

		case ActionTypes.UPDATE:
			AuthorStoreInstance.updateAuthor(action.author);
			break;

		case ActionTypes.DELETE:
			AuthorStoreInstance.deleteAuthor(action.id);
			break;

		default:
			//do nothing
	}
});

AuthorStoreInstance.init();

export default AuthorStoreInstance;