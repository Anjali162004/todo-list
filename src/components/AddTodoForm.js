import React, { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // handleSubmit
  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value }));
    }
    // After submitting form is cleared
    setValue('');
  };

   

  return (
    <form onSubmit={onSubmit} className="form-input">
      <input
        id="todo-input"
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="smooth-transition" type="submit">
        +
      </button>
    </form>
  );
};

export default AddTodoForm;
