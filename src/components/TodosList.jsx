import React from "react";
import TodoItem from "@/components/TodoItem";

export default function TodosList({ todosProps, handleChange, delTodo, setUpdate }) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
