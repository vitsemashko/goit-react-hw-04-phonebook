import PropTypes from "prop-types";
import { useState } from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const onNameChange = (e) => {
		setName(e.target.value);
	};
	const onNumberChange = (e) => {
		setNumber(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ name, number });
		setName("");
		setNumber("");
	};
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<label className={css.labelName}>
				Name
				<input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={onNameChange}
				/>
			</label>
			<label>
				Number
				<input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={onNumberChange}
				/>
			</label>
			<button type="submit" className={css.button}>
				Add contact
			</button>
		</form>
	);
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
