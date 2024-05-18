
interface InputBoxtype {
    label:string;
    placeholder:string;
    type:string;
    
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
}


export const InputBox = ({label,placeholder,type,onChange}:InputBoxtype) =>{
    return(
        <div className="pb-2 w-full px-4 ">
            <div className="text-black font-bold text-md pb-2 font-serif">{label}</div>
            <input placeholder={placeholder} onChange={onChange} type={type} className="border border-gray-300 h-8  w-full px-2 py-1 rounded-lg"/>
        </div>
    )
}