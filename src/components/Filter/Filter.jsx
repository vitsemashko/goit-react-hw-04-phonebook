import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, onHandleFilterChange }) => {
	return (
		<>
			<p>Find contacts by name</p>
			<input type="text" value={filter} onChange={onHandleFilterChange} />
		</>
	);
};

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	onHandleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
