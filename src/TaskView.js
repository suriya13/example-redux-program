import React from "react";
import { useSelector } from "react-redux";
import { deleteTask } from "./slices/TaskSlice";
import { useDispatch } from "react-redux";

export default function TaskView() {
    const Task = useSelector((state) => state.task);
    const dispatch = useDispatch();

    function deleteHandler(index) {
        dispatch(deleteTask(index))
    }

    return <div>
                <h3>TODO List</h3>
                <ul style={{listStyle:'none'}}>
                    {
                        Task.map((data, index) =><li>{data} <button onClick={() => deleteHandler(index)}>Delete</button></li> )
                    }
                </ul>
        </div>
}