import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usernameInput: '',
    passwordInput: '',
    isAuthenticated: false,
    user_id: null
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
        },
        setID: (state, action) => {
            state.user_id = action.payload
        },
        clearID: (state) => {
            state.user_id = null
        }
    }
})

export const {updateUsername, updatePassword, givePermission, removePermission, setID, clearID} = authSlice.actions

export default authSlice.reducer