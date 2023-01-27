export const getContacts = state => state.contacts.contacts.items ?? [];
export const getFilter = state => state.contacts.filter
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;