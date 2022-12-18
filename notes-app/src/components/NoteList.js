import AddNote from './AddNote';
import Note from './Note';

// notes list gets all notes and maps through them. The div for creating a new note is also rendered from this file
const NotesList = ({notes, addNoteHandler, handleDeleteNote, handleEditNote}) =>{
    return (
        <div className='container'>
            <div className='note-create'><AddNote addNoteHandler={addNoteHandler}/></div>
            <div className='notes-list'>
                {notes.map((note)=> <Note id={note.id} text={note.text} color={note.color} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>)}
            </div>
        </div>
    )
}

export default NotesList;