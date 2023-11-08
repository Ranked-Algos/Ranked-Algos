import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signup: 0
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        signupPage: (state) => {
            state.signup = 0
        },
        loginPage: (state) => {
            state.signup = 1
        }
    }
})

export const { signupPage, loginPage } = homeSlice.actions;

export default homeSlice.reducer;