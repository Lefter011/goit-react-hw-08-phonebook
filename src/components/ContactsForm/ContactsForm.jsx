import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import style from './contactsForm.module.css';

export const ContactsForm = () => {
    const contacts = useSelector(getContacts),
        dispatch = useDispatch(),
        [fieldValues, setFieldValues] = useState({
            name: '',
            number: '',
        })
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        let alreadyContact = null;
        const form = e.currentTarget;
        const name = form.elements.name.value;
        contacts.forEach(contact => {
            if (contact.name.toLowerCase() === name.toLowerCase()) {
                alreadyContact = true;
            }
        })
        if (alreadyContact) {
            return alert(`${name} is already in contacts`);
        }
        const number = form.elements.number.value;
        const newContact = {
            name: name,
            number: number,
        }

        dispatch(addContact(newContact));
        resetStateForm();
    }

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFieldValues(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const resetStateForm = () => {
        setFieldValues({
            number: '',
            name: '',
        })
    }

    return(
    <form onSubmit={onSubmitForm} className = {style.searchForm}>
        <label htmlFor="Name">
        Name
        <input
            onInput={onInputChange}
            value={fieldValues.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <label htmlFor="Number">
        Number
        <input
            onInput={onInputChange}
            value={fieldValues.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        <button type="submit">Add contact</button>
    </form>)
}