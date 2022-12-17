import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({notes}) =>{
    return (
        <div className='container'>
            <div className='note-create'><AddNote/></div>
            <div className='notes-list'>
                {notes.map((note)=> <Note id={note.id} text={note.text}/>)}
            </div>
        </div>

    )
}

export default NotesList;