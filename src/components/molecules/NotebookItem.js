import { ButtonArchived } from "../atoms/ButtonArchived";
import { ButtonDelete } from "../atoms/ButtonDelete";
export const NoteBookItem = (props) => {
    const {notebook} = props;

    return(
        <>
            <div className="flex mb-4 px-10 py-8 justify-items-center">
            <div className="w-1/1 bg-white border-l-4 border-l-purple-100 px-4">
                <p className="font-bold text-xl mb-2">{notebook.title}</p>
                <p className="text-gray-700 text-base font-light leading-8 tracking-wide">{notebook.body}</p>
                <div className="">
                <ButtonDelete
                    data={props}
                />

                <ButtonArchived
                    data={props}
                />
            </div>
            </div>
            </div>
        </>
    );
}