import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/todolist';
import CriarTodo from './components/criarTodo';
import { TodoProps } from './@types/todo';

function App() {
  const [getTodos, setTodos] = useState<TodoProps[]>([]);

  useEffect(()=> {
    console.log({getTodos})
  }, [getTodos]);

  const tratarCriacaoDeTarefas = (titulo: string) => {
    const id: number = getTodos.length + 1;
    const tarefa: TodoProps = {id, titulo};
    

    const tmpTarefas: TodoProps[] = [...getTodos, tarefa];
    setTodos(tmpTarefas);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <CriarTodo 
        onEnviar={(titulo: string) => tratarCriacaoDeTarefas(titulo)} />
      <TodoList 
        todos={getTodos}
        onChange={(newTodoList: TodoProps[]) => setTodos(newTodoList)}/>
    </div>
  );
}

export default App;
