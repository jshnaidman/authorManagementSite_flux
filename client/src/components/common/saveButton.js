'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

var SaveButton = (props) => {
	if (props.href === undefined) {

		return (
			<input type="submit" 
				   value={props.value}
				   className={props.classNames} 
				   onClick={props.onSave} />
		);
	}
	
	return (
		
		<Link to={props.href} >
			<input type="submit" 
					   value={props.value}
					   className={props.classNames} 
					   onClick={props.onSave} />
		</Link>
	);
};


SaveButton.propTypes = {

	value: PropTypes.string.isRequired,
	classNames: PropTypes.string.isRequired,
	onSave: PropTypes.func.isRequired,
	href: PropTypes.string

};

module.exports = SaveButton; 