import { useEffect, useState } from "react"
import { AppBar } from "../components/Blog/AppBar"
// import axios from "axios";
import { useDispatch } from "react-redux";
import { addblog } from "../redux/slice/blogSlice";

interface BlogInputType {
    title:string;
    content:string;
}

export const CreateBlog = () =>{
    const dispatch = useDispatch();
    // const selector = useSelector((state)=>state);
    // const blog = selector.blog;
    const [blogInput,setBlogInput]=useState<BlogInputType>({
        title:'',
        content:''
    });

    useEffect(()=>{
        dispatch(addblog(blogInput));
        // console.log(blog.value)
    },[blogInput]);
    
    function TitleInput(e: React.ChangeEvent<HTMLInputElement>){
        setBlogInput({
            ...blogInput,
            title:e.target.value,
        })
    }

    function ContentInput(e: React.ChangeEvent<HTMLTextAreaElement>){
        setBlogInput({
            ...blogInput,
            content:e.target.value
        })
    

    }

    return (
        <div>
            <AppBar/>
            

            <div className="flex flex-col gap-3 justify-center mx-auto w-2/3 pt-3">
            <input placeholder="Title" onChange={TitleInput} className=" border-none h-20 text-5xl capitalize outline-none font-medium font-serif"/>
            <textarea placeholder="Tell your story .... " onChange={ContentInput} className="border-none h-screen outline-none text-xl font-medium text-slate-800 font-serif align-top rounded-lg  py-2 px-2 overflow-y-scroll no-scrollbar "/>
            <div>
            
            </div>
            
            </div>

            
            
        </div>
    )
}