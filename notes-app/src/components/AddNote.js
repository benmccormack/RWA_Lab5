// here we want to create the form for adding a note.
import { useState } from "react";

const AddNote = ({addNoteHandler}) => {
    const [noteText, setNoteText] = useState('');
    const [noteColour, setNoteColour] = useState('');

    // save note handler
    const saveNoteClickHandler = () => {
        if(noteText.trim().length > 0)
            addNoteHandler(noteText, noteColour);
            setNoteText('');
            setNoteColour('');
    }

    // handling the value change for text
    const handleValueChange = (event) => {
        setNoteText(event.target.value);
    }

    // handling color change for color input from form.
    const handleColorChange = (event) => {
        setNoteColour(event.target.value);
    }

    // create note form
    return(<div className="create-note">
        <h1>- Note Buddy -</h1>
        <textarea onChange={handleValueChange} value={noteText} placeholder="Type here to add a new note"></textarea><br/><br/>
        <label>Note Colour:   </label>
        <input type="color" onChange={handleColorChange} /><br/><br/>
        <button className="create" onClick={saveNoteClickHandler}>Create Note</button>
    </div> )
}

export default AddNote;