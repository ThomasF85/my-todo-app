import React from "react";
import styled from "styled-components";
import useStore from "../common/useStore";

function ToDo({ id }) {
  const toggleCompleted = useStore((state) => state.toggleCompleted);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const archive = useStore((state) => state.archive);
  const todo = useStore((state) => state.todos.find((todo) => todo.id === id));

  return (
    <Wrapper completed={todo.completed}>
      <p>{todo.text}</p>
      <div>
        <Button onClick={() => toggleCompleted(id)}>
          {todo.completed ? "uncomplete" : "complete"}
        </Button>
        {todo.completed ? (
          <Button onClick={() => archive(id)}>archive</Button>
        ) : (
          <Button onClick={() => deleteTodo(id)}>delete</Button>
        )}
      </div>
    </Wrapper>
  );
}

export default ToDo;

const Button = styled.button`
  margin: 0 0.5em;
`;

const Wrapper = styled.section`
  border: 1px solid black;
  border-radius: 1em;
  background-color: ${(props) => (props.completed ? "green" : "red")};
  margin: 1em auto;
  padding: 1em;
  display: flex;
  justify-content: space-between;

  p {
    padding: 0;
    margin: 0;
    font-size: 1.2em;
  }
`;
