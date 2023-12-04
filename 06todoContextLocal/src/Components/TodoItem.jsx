import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () =>{
        updateTodo(todo.id, {todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}` }
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
                <path fill="#e1e0df" d="M82.9,14.9c-1.2,0.2-2.3,0.7-3.3,1.3C80.6,15.6,81.8,15.1,82.9,14.9z"></path><path fill="#fff" d="M17.1,113.1l36-8c1.7-0.4,3.3-1.3,4.5-2.5l52.9-52.9c3.6-3.6,3.6-9.4,0-13L91.1,17.4 c-3.6-3.6-9.4-3.6-13,0L25.2,70.3c-1.2,1.2-2.1,2.8-2.5,4.5l-7.8,36.1C14.4,112.2,15.8,113.6,17.1,113.1"></path><path fill="#fff" d="M104.1,56.3l6.5-6.5c3.6-3.6,3.6-9.4,0-13L91.2,17.3c-3.6-3.6-9.4-3.6-13,0l-6.5,6.5L104.1,56.3"></path><path fill="#f8b0b4" d="M41.6 86.4L25.4 70.2 71.7 23.9 104.1 56.3 57.8 102.6 41.6 86.4"></path><path fill="#f37c7e" d="M41.6 86.4L87.9 40.1 104.1 56.3 57.8 102.6 41.6 86.4"></path><path fill="#e7e7e7" d="M51.3 96.2L51.3 96.2c-1.3 1.3-2.8 2.3-4.7 2.6l-26.2 8.8-5.5 3.2v.2c-.4 1.1.5 2.3 1.6 2.3 0 0 0 0 .1 0 .2 0 .3 0 .5-.1l0 0 36-8c1.7-.4 3.3-1.3 4.5-2.5l.1-.1L51.3 96.2M97.7 49.8L97.7 49.8l6.3 6.4 0 0L97.7 49.8M104.1 30.4c3.6 3.6 3.6 9.4 0 13l-6.4 6.4 6.3 6.4.1.1 6.5-6.5c1.8-1.8 2.7-4.1 2.7-6.4 0-2.3-.9-4.7-2.7-6.5L104.1 30.4"></path><path fill="#dc7173" d="M97.6 49.8L51.3 96.2 57.8 102.6 104.1 56.3 104 56.2 97.6 49.8"></path><path fill="#a8b2c6" d="M14.9,110.9l2.8-15.4l15,15l-15.6,2.7C15.8,113.6,14.4,112.2,14.9,110.9z"></path><path fill="#e1e0df" d="M111.8,48.4c0.7-1,1.1-2.1,1.4-3.3C112.9,46.2,112.5,47.4,111.8,48.4z"></path><path fill="none" d="M71.7 23.9L104.1 56.3"></path><path fill="#464c55" d="M13.2,114.8c-1.3-1.3-1.7-3.1-1.2-4.7l7.9-35.9c0.6-2.3,1.6-4.3,3.3-5.9l52.8-53 c4.7-4.7,12.4-4.8,17.2-0.1l19.4,19.4c4.7,4.7,4.7,12.5,0,17.3l-52.9,52.9c-1.6,1.6-3.7,2.8-5.9,3.3L17.9,116 C16.3,116.5,14.5,116.1,13.2,114.8z M89,19.5c-2.4-2.4-6.4-2.4-8.8,0L27.3,72.4c-0.8,0.8-1.4,1.8-1.6,3l-7.6,34.4l34.4-7.6 c1.1-0.3,2.2-0.8,3-1.6l52.9-52.9c2.4-2.4,2.4-6.4,0-8.8L89,19.5z"></path>
                </svg>}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
            
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
               <linearGradient id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z" opacity=".05"></path><path d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z" opacity=".07"></path><path fill="#fff" d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"></path><path fill="#fff" d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"></path>
               </svg>
               
            </button>
        </div>
    );
}

export default TodoItem;
