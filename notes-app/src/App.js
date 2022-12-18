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

  const addNote = (text, color) => {
    const newNote = {
      id: nanoid(),
      text: text,
      color: color,
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const editNote = (id) => {
    const note = notes.filter((note) => note.id === id);
    
    let updatedText = prompt("Please enter updated note text");
    //= updatedText;
  }


  return (
    <div className="container">
      <NoteList notes={notes} addNoteHandler={addNote} handleDeleteNote = {deleteNote} handleEditNote = {editNote}/>
    </div>
  );
};

export default App;