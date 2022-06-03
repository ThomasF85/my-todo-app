import React, { useState } from "react";
import styled from "styled-components";
import useStore from "../common/useStore";

function AddTodoForm() {
  const [text, setText] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        addTodo(text);
      }}
    >
      <label htmlFor="input-todo">New Todo:</label>
      <input
        id="input-todo"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">add</button>
    </Form>
  );
}

export default AddTodoForm;

const Form = styled.form`
  margin: 1em auto;
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
`;
