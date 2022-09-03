import { NoteBookItem } from "./NotebookItem";
export const NotebookContainer = (props) => {

    const { search, notebooks, desc, eventHandlerDeleteNotebook, eventHandlerArsipNotebook } = props;

    return(
        <>
            <div>
                <div className={`px-10 py-8 ${desc === 'Active Document' ? 'text-purple-500 text-lg font-bold uppercase' : ' text-black-400 text-lg font-bold uppercase'}`}>
                    {desc}
                </div>
                <div className="">
                    {search === "" ? (notebooks.length > 0 ? (notebooks.map(notebook => {
                        return (
                            <NoteBookItem
                            key={notebook.id}
                            eventHandlerDeleteNotebook={eventHandlerDeleteNotebook}
                            eventHandlerArsipNotebook={eventHandlerArsipNotebook}
                            notebook={notebook}
                            ></NoteBookItem>
                        );
                        })
                    ) : (
                        <span className="text-gray-700 text-base  font-bold leading-8 tracking-wide">no records in archive</span>
                    )
                    ) : (
                    notebooks.filter(
                        (filtered) => search !== "" && filtered.title.toLowerCase().includes(search))?.map(notebook => {
                        return (
                            <NoteBookItem
                            key={notebook.id}
                            eventHandlerDeleteNotebook={eventHandlerDeleteNotebook}
                            eventHandlerArsipNotebook={eventHandlerArsipNotebook}
                            notebook={notebook}
                            ></NoteBookItem>
                        );
                        })
                    )}
                </div>
            </div>
        </>
    );
}