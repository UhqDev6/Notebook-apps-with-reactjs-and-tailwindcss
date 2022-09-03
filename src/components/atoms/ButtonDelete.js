export const ButtonDelete = (props) => {
    return(
        <>
            <button
                onClick={()=> props.data.eventHandlerDeleteNotebook(props.data.notebook?.id)}
                className="btn-delete"
            >
                Delete
            </button>
        </>
    );
}