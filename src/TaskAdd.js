import React, { useState } from "react";
import { addTask as addTaskAction } from "./slices/TaskSlice";
import { useDispatch } from "react-redux";

export default function TaskAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();


    function addNewTask() {
        if (input) {
            dispatch(addTaskAction(input))
            setInput("");
        }
    }

    return <>
        <div>
            <h3>Add New Task</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value) } />
            <button onClick={addNewTask}>Add</button>
        </div>
    </>
        
        
}