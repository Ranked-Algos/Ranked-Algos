import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usernameInput: '',
    passwordInput: '',
    isAuthenticated: false
}

export const AuthSlice = createSlice({
    name: 'Auth',
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

export const {updateUsername, updatePassword, givePermission, removePermission} = AuthSlice.actions

export default AuthSlice.reducer