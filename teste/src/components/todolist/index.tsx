import { useState } from "react"

type TodoProps = {
    id: number
    titulo: string
}

export default const TodoList = () => {
    const [getTodos, setTodos] = useState<TodoProps[]>([
        {id:1, titulo: "1"},
        {id:2, titulo: "2"},
        {id:3, titulo: "3"},
    ]);

    const concluirTodo = (index: number) => {
        const tmpTodos: number[] = getTodos
        tmpTodos.slice(index, 1)
        setTodos(tmpTodos)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                (getTodos.map{
                    <li>{id=1}</li>
                })
                
            </ul>
        </div>

    )
}