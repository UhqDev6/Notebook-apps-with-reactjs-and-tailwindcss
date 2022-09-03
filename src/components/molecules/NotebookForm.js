import { ButtonInput } from "../atoms/ButtonInput";
export const NotebookForm = (props) => {
    const {title, body, onTitleChange, onNotebookChange, onSubmitEventHandler} = props;
    
    const limit = 50;
    const count = limit - title.length;

    return(
        <>
            <form className="w-full max-w-lg" onSubmit={onSubmitEventHandler}>
                <div className="md:flex md:items-center mb-6 justify-center text-center ">
                    <h2 className="text-2xl font-bold w-full uppercase">Create Notes</h2>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Title</label>
                    </div>

                    <div className="w-full">
                        <input
                            className="bg-slate-50 appearance-none border-2 border-slate-100 rounded w-full py-2 px-4 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            value={title}
                            onChange={onTitleChange}
                            placeholder="title"
                            required
                        ></input>
                        <span className="text-gray-500 font-semibold text-sm">
                            {`Sisa Karakter  ${count}`}{count === 0 && <p className="text-red-600">you can't type because the character limit has been met</p>}
                        </span>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Note</label>
                    </div>

                    <div className="w-full">
                        <textarea
                            className="bg-slate-50 appearance-none border-2 border-slate-100 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            onChange={onNotebookChange}
                            value={body}
                            rows="3"
                            type="text"
                            placeholder="Note"
                            required
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6 justify-center">
                <ButtonInput>
                    Create
                </ButtonInput>
                </div>
            </form>
        </>
    );
}