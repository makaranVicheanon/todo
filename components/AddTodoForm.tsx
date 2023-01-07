import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { TodoType } from "../models/ITodo";

type Props = {
  setTodoList: Dispatch<SetStateAction<TodoType[]>>;
  todoList: TodoType[];
};

function AddTodoForm({ todoList, setTodoList }: Props) {
  const [todo, setTodo] = useState<string>();

  const submitHanlder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoType = {
      id: self.crypto.randomUUID(),
      todo: todo as string,
      isCompleted: false,
      createdAt: new Date(),
    };

    setTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <form onSubmit={submitHanlder}>
      <label htmlFor="todo">Add Todo Here</label>
      <input name="todo" onChange={(e) => setTodo(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
