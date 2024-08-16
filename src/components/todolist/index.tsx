import React, { useState, useEffect } from 'react'
import './styles.css'
import { TodoProps } from '../../@types/todo'

type TodoListProps = {
    todos: TodoProps[]
    onChange: (todos: TodoProps[]) => void;
}

const TodoList = ({todos, onChange}: TodoListProps) => {
        useEffect(() => {}, [todos])

    const finalizaTodo = (id: number) => {
        const tmpTodos: TodoProps[] = todos.filter((todo: TodoProps) => todo.id !== id)
        onChange(tmpTodos)
    }

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {
                    todos.map((todo: TodoProps) => (
                        <li key={todo.id}>
                            <input type='checkbox' onClick={() => finalizaTodo(todo.id)} /> {todo.titulo}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;