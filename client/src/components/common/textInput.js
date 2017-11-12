'use strict';

var React = require('react');
var PropTypes = require('prop-types');

var Input = (props) => {


	var wrapperClass = 'form-group';
	if (props.error && props.error.length > 0) {
		wrapperClass += ' ' + 'has-error';
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={props.name}>{props.label}</label>
			<div className="field">
				<input type="text"
					name={props.name}
					className="form-control"
					placeholder={props.placeholder}
					onChange={evt => props.onChange(evt)}
					value={props.value} />
				<div className="input">{props.error}</div>
			</div>
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

module.exports = Input;