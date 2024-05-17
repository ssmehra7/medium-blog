// import axios from "axios"
// import { AppBar } from "../components/Blog/AppBar"
// import { BlogCard } from "../components/Blog/BlogCard"
// import { BACKEND_URL } from "../config"
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { addallBlog } from "../redux/slice/allblogSlice"





// export const Blog = () =>{
//   const token = localStorage.getItem('token');
//   const [blogdata,setBlogdata] = useState([]);
//   const dispatch = useDispatch();
  
  

//   async function getallBlog (){
//     console.log("Attempting to fetch blogs...");
//     try{
//       const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
//         headers:{
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       console.log(response);
//       setBlogdata(response.data.blogs);
//       dispatch(addallBlog(response.data.blogs));
//     }catch(error){
//       console.log(error);
//       console.log('above is the error');
//     }
    
//   }

// useEffect(()=>{
//   getallBlog();
// },[]);
   
//     return (
//      <div>
//       <AppBar />
//       <div className="flex flex-col w-1/2 pt-10 mx-auto gap-5">
      
//   {blogdata.map((blog) => (
//     <Link to={`/blog/${blog.id}`}>
//       <BlogCard
//             key={blog.id}
//             author={blog.author.name}
//             title={blog.title}
//             content={blog.content}
//             publishedDate={'2nd feb 2024'} 
//           />
//     </Link>
          
//         ))}
    
//       </div>
      
//      </div>
//     )
//  }



import axios from "axios";
import { AppBar } from "../components/Blog/AppBar";
import { BlogCard } from "../components/Blog/BlogCard";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addallBlog } from "../redux/slice/allblogSlice";

interface BlogAuthor {
  name: string;
}

interface BlogData {
  id: string;
  author: BlogAuthor;
  title: string;
  content: string;
  publishedDate: string;
}

export const Blog = () => {
  const token = localStorage.getItem("token");
  const [blogdata, setBlogdata] = useState<BlogData[]>([]);
  const dispatch = useDispatch();

  async function getallBlog() {
    console.log("Attempting to fetch blogs...");
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setBlogdata(response.data.blogs);
      dispatch(addallBlog(response.data.blogs));
    } catch (error) {
      console.log(error);
      console.log("above is the error");
    }
  }

  useEffect(() => {
    getallBlog();
  }, []);

  return (
    <div>
      <AppBar />
      <div className="flex flex-col w-1/2 pt-10 mx-auto gap-5">
        {blogdata.map((blog) => (
          <Link to={`/blog/${blog.id}`} >
            <BlogCard
              author={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
              key={blog.id} // Assuming this comes from the backend
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
