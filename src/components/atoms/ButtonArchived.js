export const ButtonArchived = (props) => {
    return(
        <>
            <button
                    onClick={()=> props.data.eventHandlerArsipNotebook(props.data.notebook?.id)}
                    className={`${props.data.notebook.archived === true ? ('btn-move') : ('btn-archives')}`}
            >
                {props.data.notebook.archived === true ? ('Move') : ('Archived')} 
            </button>
        </>
    );
}