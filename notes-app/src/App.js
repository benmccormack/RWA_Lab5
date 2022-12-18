import { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from 'nanoid';

const App = () => {
  // some sample notes
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Water the plants",
      color: "Coral"
    },
    {
      id: nanoid(),
      text: "Feed the dog",
      color: "cyan"
    },
    {
      id: nanoid(),
      text: "Collect parcels",
      color: "Chartreuse"
    },
    {
      id: nanoid(),
      text: "Bring in the washing",
      color: "red"
    }

  ]);

  // function to add a note
  const addNote = (text, color) => {
    const newNote = {
      id: nanoid(),
      text: text,
      color: color,
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  // function to delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // function to edit a note
  const editNote = (id) => {
    const note = notes.filter((note) => note.id === id);
    
    let noteText = prompt("Please enter updated note text");
    note[0].text = noteText;
    console.log(note);
    const newNotes = [...notes];
    setNotes(newNotes);
  } 

  // rendering the note list
  return (
    <div className="container">
      <NoteList notes={notes} addNoteHandler={addNote} handleDeleteNote = {deleteNote} handleEditNote = {editNote}/>
    </div>
  );
};

export default App;