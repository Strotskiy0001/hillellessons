import { useState } from "react";
import Button from "../../../shared-components/buttons";
import AppInput from "../../../shared-components/input-control";
import "./create-todo.css";

export default function TodoCreate({
  cb,
  todo = { title: "", body: "" },
  named = "Create Todo",
}) {
  const [state, setstate] = useState(todo);

  function setProperty(e) {
    const newState = { ...state };
    newState[e.target.name] = e.target.value;
    setstate(newState);
  }

  return (
    <div className="create-container">
      <AppInput
        placeholder="title"
        value={state.title}
        name={"title"}
        onChange={setProperty}
      ></AppInput>
      <AppInput
        placeholder="body"
        name={"body"}
        value={state.body}
        onChange={setProperty}
      ></AppInput>
      <Button cb={() => cb(state)}>{named}</Button>
    </div>
  );
}
