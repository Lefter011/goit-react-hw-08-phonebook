import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./contactsSlice";

export const store = configureStore({
    reducer: reducer,
});