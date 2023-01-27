import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, addContact, fetchContacts } from './operations';


const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: '',
}

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id);
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
    
    reducers: {
      changeFilter(state, action) {
        state.filter = action.payload;
      }
    }
})

export const { changeFilter } = contactsSlice.actions;
export const reducer = contactsSlice.reducer;