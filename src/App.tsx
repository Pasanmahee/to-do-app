import React, { FC, useState } from "react";
import { Input, Button } from "antd";
import StyledForm from "./styles/StyledForm";

interface TodoProps {
  todo: any;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

interface TodoFormProps {
  addTodo: (text: string, isCompleted: boolean) => void;
}

function Todo({ todo, index, completeTodo, removeTodo }: TodoProps) {
  return (
    <div
      className='todo'
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button onClick={() => completeTodo(index)}>Complete</Button>
        <Button onClick={() => removeTodo(index)}>x</Button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState("");
  const [boolValue, setBoolvalue] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, boolValue);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

const App: FC = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text: string, isCompleted: boolean) => {
    const newTodos = [...todos, { text, isCompleted }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <StyledForm>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </StyledForm>
  );
};

export default App;
