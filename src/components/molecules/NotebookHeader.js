import { Search } from "../atoms/Search";
export const NotebookHeader = (props) => {

    return(
        <>
            <header className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                <div className="">
                <span className="bg-purple-400 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto uppercase">Notebook Apps</span>
                </div>
                <div>
                    <Search
                        data={props}
                    />
                </div>
            </header>
        </>
    );
}