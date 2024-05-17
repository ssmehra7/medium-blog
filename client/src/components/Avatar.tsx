


export const Avatar = ({ author }: { author: string }) => {

    return (
        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">{author[0]}</span>
        </div>
    )


}