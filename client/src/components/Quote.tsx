interface inputtype {
    label:string;
}

export const Quote = ({label}:inputtype) => {
    return (

        <div className="bg-slate-200 flex shadow-lg  items-center justify-center h-screen font-serif">
            <div className="font-extrabold text-3xl px-5">
                {label}
            </div>
        </div>

    )
}