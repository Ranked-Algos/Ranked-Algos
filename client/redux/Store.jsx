import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/AuthData/AuthSlice.js'
import codeReducer from './features/AuthData/CodeSlice.jsx'

const Store = configureStore({
    reducer: {
        auth: authReducer,
        code: codeReducer
    }
})

export default Store