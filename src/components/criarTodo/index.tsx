import React, { useState } from "react";
import './styles.css'

type CriarTodoProps = {
    onEnviar : (tituloTarefa: string) => void
}

const CriarTodo = ({onEnviar}: CriarTodoProps) => {
    const [getTitulo, setTitulo] = useState<string>('');

    return (
        <div>
            <h1>Criar Todo</h1>
            <input type="text"
                placeholder="Digite o título da tarefa"
                onChange={(event) => {
                    setTitulo(event.target.value)
                }} />
            <button onClick={() => onEnviar(getTitulo)}>Criar tarefa</button>
        </div>
    )
}

export default CriarTodo;