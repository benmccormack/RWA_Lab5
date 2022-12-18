const Note = ({id, text, color, handleDeleteNote, handleEditNote}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="noteFooter">
                <button className="edit-button" onClick={() => handleEditNote(id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteNote(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note;