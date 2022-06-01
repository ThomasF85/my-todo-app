import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import ToDo from "./components/ToDo";
import { nanoid } from "nanoid";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function toggleCompleted(id) {
    const toggledTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(toggledTodos);
  }

  function toggleArchived(id) {
    const toggledTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, archived: !todo.archived };
      }
      return todo;
    });
    setTodos(toggledTodos);
  }

  function deleteTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function addTodo(text) {
    const newTodos = [
      { id: nanoid(), text: text, completed: false, archived: false },
      ...todos,
    ];
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Header>
        <h1>My Todo App</h1>
      </Header>
      <Main>
        <AddTodoForm addTodo={addTodo} />
        {todos
          .filter((todo) => !todo.archived)
          .map((todo) => (
            <ToDo
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleCompleted={() => toggleCompleted(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              archive={() => toggleArchived(todo.id)}
            />
          ))}
      </Main>
    </div>
  );
}

export default App;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4em;
`;

const Main = styled.main`
  width: 30em;
  margin: 0 auto;
`;
