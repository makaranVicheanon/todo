"use client";

import { Inter } from "@next/font/google";
import { FormEvent, SetStateAction, useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import { TodoType } from "../models/ITodo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  return (
    <main>
      <AddTodoForm setTodoList={setTodoList} todoList={todoList} />
      {todoList.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.todo}</span>
            <input type="checkbox"></input>
            <button>edit</button>
            <button>x</button>
          </div>
        );
      })}
    </main>
  );
}
