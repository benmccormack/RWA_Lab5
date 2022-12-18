const Note = ({id, text, color, handleDeleteNote, handleEditNote}) => {
    return(
        // background color is changed based on the color property which comes from the add note component
        // text is also passed in as a property. edit and delete buttons are put into the notes footer.
        <div className="note" style={{backgroundColor: color}}>
            <span>{text}</span>
            <div className="noteFooter">
                <button className="edit-button" onClick={() => handleEditNote(id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteNote(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note;