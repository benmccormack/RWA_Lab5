import { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Example Note 1!",
    },
    {
      id: nanoid(),
      text: "Example Note 2!",
    },
    {
      id: nanoid(),
      text: "Example Note 3!",
    },
    {
      id: nanoid(),
      text: "Example Note 4!",
    }

  ]);

  return (
    <div className="container">
      <NoteList notes={notes}/>
    </div>
  );
};

export default App;