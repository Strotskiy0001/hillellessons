import { useState } from "react";

const NotesForm = ({ cb }) => {
  const initialState = {
    id: null,
    title: "",
  };
  const formConfig = [
    {
      type: "text",
      name: "title",
      placeholder: "Enter Title",
    },
  ];
  const [state, setstate] = useState(initialState);
  function setFormValue(event, type) {
    setstate({ ...state, [type]: event.target.value, id: Date.now() });
  }

  return (
    <div className="form-container">
      {formConfig.map((e, i) => (
        <input
          key={i}
          type={e.type}
          value={state[e.name]}
          name={e.name}
          onChange={(event) => setFormValue(event, e.name)}
          placeholder={e.placeholder}
        />
      ))}

      <div>
        <button onClick={() => cb(state)}>Create</button>
      </div>
    </div>
  );
};

export default NotesForm;
