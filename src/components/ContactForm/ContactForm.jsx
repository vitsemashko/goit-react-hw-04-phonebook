import React from "react";
import PropTypes from "prop-types";

const ContactForm = ({
	name,
	number,
	onHandleSubmit,
	onHandleNameChange,
	onHandleNumberChange,
}) => {
	return (
		<form onSubmit={onHandleSubmit}>
			<label>
				Name
				<input
					onChange={onHandleNameChange}
					value={name}
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
			</label>
			<label>
				Number
				<input
					onChange={onHandleNumberChange}
					value={number}
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
				/>
			</label>
			<button type="submit">Add contact</button>
		</form>
	);
};

ContactForm.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onHandleSubmit: PropTypes.func.isRequired,
	onHandleNameChange: PropTypes.func.isRequired,
	onHandleNumberChange: PropTypes.func.isRequired,
};

export default ContactForm;
