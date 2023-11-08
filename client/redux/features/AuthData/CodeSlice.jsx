import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    codeText: '',
    time: 0,
    running: false
};

export const codeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        updateCodeText: (state, action) => {
            state.codeText = action.payload
        },
        updateTime: (state) => {
            state.time += 1;
        },
        resetTime: (state) => {
            state.time = 0
        },
        start: (state) => {
            state.running = true
        },
        stop: (state) => {
            state.running = false
        }
    }
})

export const { updateCodeText, updateTime, resetTime, start, stop } = codeSlice.actions

export default codeSlice.reducer