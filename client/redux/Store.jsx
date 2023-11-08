import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/AuthData/AuthSlice.js'
import codeReducer from './features/AuthData/CodeSlice.jsx'
import homeReducer from './features/AuthData/HomeSlice.js'

const Store = configureStore({
    reducer: {
        auth: authReducer,
        code: codeReducer,
        home: homeReducer,
    }
})

export default Store