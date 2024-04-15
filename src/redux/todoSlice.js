import { createSlice } from "@reduxjs/toolkit";
//Random ID
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuid(), title: "Start making a TODO list", completed: false },
    { id: uuid(), title: "Oh! its Night. Swich ON the nightmode", completed: false },
    {
      id: uuid(),
      title: "WOW! You have Completed your Daily task",
      completed: false,
    },
    {
      id: uuid(),
      title: "Grant yourself a pizza party!!😋",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    markComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, markComplete, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
