import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63cd13f8d4d47898e392202c.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get("/contacts");
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const {data} = await axios.post("/contacts", contact);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const {data} = await axios.delete(`/contacts/${contactId}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)