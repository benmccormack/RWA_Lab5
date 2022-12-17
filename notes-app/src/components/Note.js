const Note = ({id, text}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="noteFooter">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default Note;