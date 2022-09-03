
export const ButtonInput = ({children}) => {
    return(
        <>
            <button
                type="submit"
                className="btn-primary" 
            >
                {children}
            </button>
        </>
    );
}