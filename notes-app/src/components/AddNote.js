// here we want to create the form for adding a note.
import { useState } from "react";

const AddNote = ({addNoteHandler}) => {
    const [noteText, setNoteText] = useState('');
    const saveNoteClickHandler = () => {
        if(noteText.trim().length > 0)
            addNoteHandler(noteText);
            setNoteText('');
    }
    const handleValueChange = (event) => {
        setNoteText(event.target.value);
        console.log(event.target.value);
    }

    return(<div className="create-note">
        <h1>Note Buddy</h1>
        <textarea onChange={handleValueChange} value={noteText} placeholder="Type here to add a new note"></textarea>
        <input type="color" id="noteColor"/>
        <button className="create" onClick={saveNoteClickHandler}>Create Note</button>
    </div> )
}

export default AddNote;