import React from "react";
import Button from "../shared-components/buttons";
import TodoCreate from "./todo/create-todo/create-todo";
import TodosList from "./todos-list";

const todos = [
  {
    id: 1,
    title: "test11",
    body: "kekw",
  },
  {
    id: 2,
    title: "test22",
    body: "kekw",
  },
  {
    id: 3,
    title: "test33",
    body: "kekw",
  },
];
export default class TodosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: null,
      todos,
      isEditeMode: false,
      isCreateMode: false,
    };
    this.onTodoCreate = this.onTodoCreate.bind(this);
    this.onTodoDelete = this.onTodoDelete.bind(this);
    this.onTodoEdit = this.onTodoEdit.bind(this);
    this.onCreateNewTodo = this.onCreateNewTodo.bind(this);
  }

  render() {
    return (
      <>
        <div className="todos-container">
          <Button cb={this.onTodoCreate}>Create</Button>
          {this.renderTodoContent()}
        </div>
      </>
    );
  }
  renderTodoContent() {
    if (!this.state.isCreateMode && !this.state.isEditeMode) {
      return (
        <TodosList
          todos={this.state.todos}
          onDelete={this.onTodoDelete}
          onEdit={this.onTodoEdit}
        ></TodosList>
      );
    }
    if (this.state.isCreateMode || this.state.isEditeMode) {
      return (
        <TodoCreate
          cb={this.onCreateNewTodo}
          todo={
            this.state.currentTodo
              ? this.state.currentTodo
              : { title: "", body: "" }
          }
          title={this.state.currentTodo ? "Edit Todo" : "Create Todo"}
        ></TodoCreate>
      );
    }
  }
  onTodoCreate() {
    this.setState({ ...this.state, isCreateMode: true });
  }

  onCreateNewTodo(todo) {
    if (!todo.id) {
      this.setState({
        ...this.state,
        todos: [...this.state.todos, { ...todo, id: Date.now() }],
        isCreateMode: false,
      });
    } else {
      this.setState({
        ...this.state,
        todos: [...this.state.todos.map((t) => (t.id === todo.id ? todo : t))],
        isCreateMode: false,
        isEditeMode: false,
        currentTodo: null,
      });
    }
  }
  onTodoDelete(id) {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  onTodoEdit(todo) {
    this.setState({ ...this.state, currentTodo: todo, isEditeMode: true });
  }
}
