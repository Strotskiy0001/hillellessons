import { useState } from "react";

export default function Note({ note, changeNotes }) {
  const [state, showInput] = useState({
    showInput: false,
  });

  if (state.showInput) {
    return (
      <input
        defaultValue={note.title}
        onBlur={(e) => {
          changeNotes(note.id, e.target.value);
          showInput({
            showInput: !state.showInput,
          });
        }}
      ></input>
    );
  } else {
    return (
      <div
        id={note.id}
        className="item-notes"
        onClick={() =>
          showInput({
            showInput: !state.showInput,
          })
        }
      >
        <p>{`Title: ${note.title}`}</p>
      </div>
    );
  }
}
