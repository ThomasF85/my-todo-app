import styled from "styled-components";
import "./App.css";
import ToDo from "./components/ToDo";
import AddTodoForm from "./components/AddTodoForm";
import useStore from "./common/useStore";
import shallow from "zustand/shallow";

function App() {
  const todoIds = useStore(
    (state) =>
      state.todos.filter((todo) => !todo.archived).map((todo) => todo.id),
    shallow
  );

  return (
    <div className="App">
      <Header>
        <h1>My Todo App</h1>
      </Header>
      <Main>
        <AddTodoForm />
        {todoIds.map((id) => (
          <ToDo key={id} id={id} />
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
