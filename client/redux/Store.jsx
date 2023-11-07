import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/AuthData/AuthSlice.js'

const Store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default Store