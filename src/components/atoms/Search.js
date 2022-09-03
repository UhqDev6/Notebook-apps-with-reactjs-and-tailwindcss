export const Search = (props) => {
    return(
        <>
            <input
                type="text"
                value={props.data.search}
                className="bg-white appearance-none border-2 border-slate-100 rounded w-full py-2 px-40 h-12 pl-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={props.data.onSearchEventHandler}
                placeholder="search"
            >{}</input>
        </>
    );
}