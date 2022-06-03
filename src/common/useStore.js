import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
  todos: [
    {
      id: nanoid(),
      text: "Wash the car",
      completed: false,
      archived: false,
    },
    {
      id: nanoid(),
      text: "Do the dishes",
      completed: true,
      archived: false,
    },
    {
      id: nanoid(),
      text: "Read newspaper",
      completed: false,
      archived: false,
    },
  ],
  toggleCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    })),
  toggleArchived: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, archived: !todo.archived };
        }
        return todo;
      }),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  addTodo: (text) =>
    set((state) => ({
      todos: [
        { id: nanoid(), text: text, completed: false, archived: false },
        ...state.todos,
      ],
    })),
}));

export default useStore;
