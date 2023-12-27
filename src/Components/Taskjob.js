import { useState } from 'react';
import { AddTodo } from './Addtodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
];

export default function Taskjob() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            },
        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(
            todos.map((x) => {
                if (x.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return x;
                }
            })
        );
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter(x => x.id !== todoId));
    }
    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
        );
}