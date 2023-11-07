import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authData/authSlice.js'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }

})