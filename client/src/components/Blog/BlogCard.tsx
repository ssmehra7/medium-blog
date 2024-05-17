import { Avatar } from "../Avatar";

interface BlogProps {
    author:string;
    title:string;
    content:string;
    publishedDate:string;
    key:string;

}


export const BlogCard = ({author,title,content,publishedDate,key}:BlogProps) =>{
    return (
        <div className="border-b-2 border-slate-100 ">
            <div className="flex gap-2 ">
                <div ><Avatar author={author}/></div>
                <div className="flex justify-center flex-col font-medium">
                {author}
                    </div>
                    <div className="flex justify-center flex-col text-slate-400 font-normal">
                    {publishedDate}
                        </div> 
            </div>
            <div className="text-2xl font-bold pb-1">
                {title}
            </div>
            <div className="text-lg pb-1">
                {content.slice(0,100)+(content.length>100?'.....':'')}
            </div>
            <div className="text-slate-400 font-semibold text-sm pb-2">
                {`${Math.ceil(content.length/1000)} min read`}
            </div>
        </div>
    )
}