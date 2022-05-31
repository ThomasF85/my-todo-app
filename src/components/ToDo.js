import React from "react";
import styled from "styled-components";

function ToDo({ text, completed, toggleCompleted, deleteTodo, archive }) {
  return (
    <Wrapper completed={completed}>
      <p>{text}</p>
      <div>
        <Button onClick={toggleCompleted}>
          {completed ? "uncomplete" : "complete"}
        </Button>
        {completed ? (
          <Button onClick={archive}>archive</Button>
        ) : (
          <Button onClick={deleteTodo}>delete</Button>
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
