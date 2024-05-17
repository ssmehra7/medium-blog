

interface InputType {
    label: string;
    sublabel: string;
}

export const InputTitle=({ label,sublabel }:InputType) => {
    return (
        <div className="font-serif">
            <div className="font-bold text-3xl font-serif">{label}</div>
            <div className="text-gray-500 text-md font-serif">{sublabel}</div>
        </div>
    );
}
