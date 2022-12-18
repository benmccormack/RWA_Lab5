import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({notes, addNoteHandler, handleDeleteNote, handleEditNote}) =>{
    return (
        <div className='container'>
            <div className='note-create'><AddNote addNoteHandler={addNoteHandler}/></div>
            <div className='notes-list'>
                {notes.map((note)=> <Note id={note.id} text={note.text} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>)}
            </div>
        </div>
    )
}

export default NotesList;