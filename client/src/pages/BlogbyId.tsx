// import { useSelector } from "react-redux";
import { AppBar } from "../components/Blog/AppBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";



export const BlogbyId = () => {
  const token = localStorage.getItem('token');
  const [blog, setBlog] = useState({
    authorId: '',
    content: '',
    id: '',
    published: '',
    title: '',
    author:{
      name:'',
    }
  })

  const { id } = useParams();
  console.log(id);

  async function getBlogbyId() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setBlog(response.data.blog);
      console.log(response.data.blog);
    } catch (error) {
      console.log(error);
      console.log('here is the error');
    }

  }

  useEffect(() => {
    getBlogbyId();
  }, []);

  return (
    <div>
      <AppBar />
      <div className="flex flex-col gap-3 justify-center mx-auto w-2/3 pt-3">
        <div className="border-none h-20 text-5xl capitalize outline-none font-medium font-serif">
          { blog.title}
        </div>
        <div className="flex justify-end italic font-serif text-lg text-slate-500 ">
          - {blog.author.name}
        </div>
        <div className="border-none h-screen outline-none text-xl font-medium text-slate-800 font-serif align-top rounded-lg py-2 px-2 overflow-y-scroll no-scrollbar">
          {blog.content}
        </div>
      </div>
    </div>
  )
}