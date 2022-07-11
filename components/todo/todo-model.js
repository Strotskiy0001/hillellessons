import Button from "../../shared-components/buttons";
import "./todo-style.css";

export default function Todo({ todo, onEdit, onDelete }) {
  return (
    <>
      <div className="todo-item">
        <div>{todo.title}</div>
        <div>{todo.body}</div>
        <div className="buttons-container">
          <Button cb={onEdit}>Edit</Button>
          <Button cb={onDelete}>Delete</Button>
        </div>
      </div>
    </>
  );
}
