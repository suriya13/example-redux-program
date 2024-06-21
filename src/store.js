import { configureStore } from "@reduxjs/toolkit";
import taskSlice  from './slices/TaskSlice';

export const store = configureStore({
    devTools:false,
    reducer: {
        task: taskSlice
    }
})