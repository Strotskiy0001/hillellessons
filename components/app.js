import Todo from "./todo/todo-model";
import TodosList from "./todos-list";
// import CreateTodo from "./todo/create-todo/create-todo";
import TodosComponent from "./Todo";
import AppHeader from "./layout/header/header";

export default function App() {
  return (
    <div>
      <AppHeader />
      <TodosComponent />
      {/* <CreateTodo></CreateTodo> */}
      {/* <TodosList></TodosList> */}
    </div>
  );
}
