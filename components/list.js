import Note from "./note";

export default function NotesList({ notes, changeNotes }) {
  return (
    <div className="list-container">
      {notes.map((e, i) => (
        <Note note={e} key={i} changeNotes={changeNotes}></Note>
      ))}
    </div>
  );
}
