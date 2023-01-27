import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/phonebook/operations";
import { getContacts, selectError, selectIsLoading } from "redux/phonebook/selectors";

import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { FilterInput } from "components/FilterForm/FilterInput";
import { PhonebookList } from "components/PhonebookList/PhonebookList";

import style from '../components/app.module.css';
import { Heading } from '@chakra-ui/react'

export const Contacts = () => {
    const contacts = useSelector(getContacts),
        isLoading = useSelector(selectIsLoading),
        error = useSelector(selectError),
        dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return <div className={style.container}>
        <Heading>Phonebook</Heading>
        <ContactsForm />
        <FilterInput/>
        <Heading as='h3' size='lg'>Contacts</Heading>
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 && <PhonebookList/>}
    </div>
};