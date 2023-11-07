import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usernameInput: '',
    passwordInput: '',
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.usernameInput = action.payload
        },
        updatePassword: (state, action) => {
            state.passwordInput = action.payload
        },
        givePermission: (state) => {
            state.isAuthenticated = true
        },
        removePermission: (state) => {
            state.isAuthenticated = false
        }
    }
})

export const {updateUsername, updatePassword, givePermission, removePermission} = authSlice.actions

export default authSlice.reducer