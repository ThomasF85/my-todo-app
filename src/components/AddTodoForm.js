import React, { useState } from "react";
import styled from "styled-components";

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("");

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
