import Todo from "./todo/todo-model";

export default function TodosList({ todos, onEdit, onDelete }) {
  return (
    <>
      {todos.map((t) => (
        <Todo
          todo={t}
          key={t.id}
          onDelete={() => onDelete(t.id)}
          onEdit={() => onEdit(t)}
        ></Todo>
      ))}
    </>
  );
}
