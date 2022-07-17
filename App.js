import { useState } from "react";
import "./App.css";
import NotesForm from "./components/form";
import NotesList from "./components/list";
function App() {
  const initialState = {
    notes: [],
  };
  const [state, setstate] = useState(initialState);

  const onNewTodoCreate = (todo) => {
    setstate({ notes: [...state.notes, todo] });
  };

  const onChangeNotes = (id, text) => {
    setstate(({ notes }) => {
      const idx = notes.map((todo) => {
        if (id === todo.id) {
          return { ...todo, title: text };
        } else {
          return todo;
        }
      });
      return {
        notes: idx,
      };
    });
  };

  return (
    <div className="App">
      <NotesForm cb={onNewTodoCreate}></NotesForm>
      <NotesList notes={state.notes} changeNotes={onChangeNotes}></NotesList>
    </div>
  );
}

export default App;
