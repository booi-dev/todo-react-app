import { useState } from 'react';
import './TodoView.css';

function TodoView({ todo, toggleTodoView, updateTodo }) {

    const [task, setTask] = useState(todo.task)
    const [note, setNote] = useState(todo.note)

    const closeTodoView = function () {
        toggleTodoView()
    }

    const handlerEnterKey = function (e) {
        e.key === "Enter" && handleUpdateTodo(e)
    }

    const handleUpdateTodo = function (e) {
        updateTodo({ ...todo, task: task, note: note })
    }

    return (
        <>
            <div className='todo-view'>
                <textarea
                    className='task--view'
                    value={task}
                    onChange={(e) => setTask(e.currentTarget.value)}
                    onKeyDown={handlerEnterKey}
                    onBlur={handleUpdateTodo}
                />
                {/* </div> */}
                <label htmlFor='note' className='note-label'>note :</label>
                <textarea
                    id='note'
                    className='note--view'
                    value={note}
                    placeholder='add note ...'
                    onChange={(e) => setNote(e.currentTarget.value)}
                    onKeyDown={handlerEnterKey}
                    onBlur={handleUpdateTodo}
                />
                <button onClick={closeTodoView} className='del-btn--view'>close</button>
            </div>
            <div
                className='back-drop--todo-view'
                onClick={closeTodoView}
            ></div>
        </>
    )
}

export default TodoView;