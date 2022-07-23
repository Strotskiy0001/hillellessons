import { useState, useEffect } from "react";
import "./App.css";
import NotesForm from "./components/form";
import NotesList from "./components/list";
import api from "./api";
function App() {
  const initialState = {
    notes: [],
    newNote: null,
    currentNote: null,
  };

  useEffect(() => {
    if (!state.newNote) {
      api.get().then((r) => setstate({ notes: r.data }));
    } else {
      api.post(state.newNote).then((r) =>
        setstate(...state, {
          notes: [...state.notes, r.data],
          newNote: null,
        })
      );
    }
  }, []);

  const [state, setstate] = useState(initialState);

  const onNewTodoCreate = (note) => {
    setstate({ ...state, newNote: note });
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
