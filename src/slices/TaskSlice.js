import { createSlice } from "@reduxjs/toolkit";

const initialState  = [];

const taskSlice = createSlice({
    name: 'Task',
    initialState,
    reducers: {
        addTask(state, action) {
            state.push(action.payload)
        },
        deleteTask(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index) => index !== deleteIndex )
        }
    }

})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer




