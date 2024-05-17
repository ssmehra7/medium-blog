import { Link, useLocation, useNavigate } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const AppBar = () => {
const selector:any = useSelector((state)=>state);

const blog = selector.blog.value;

const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const location = useLocation();
    let pathforwrite:string ='/blog/create';

    if (!token){
        pathforwrite = '/signin';
    }
 
    async function publishBlog(){
        // console.log(userredux);
        // console.log(blog);
        const body = {
            title:blog.title,
            content:blog.content,
            
        }
        const response = await axios.post(
            `${BACKEND_URL}/api/v1/blog`,
            body,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          );

          console.log(response);
          navigate('/blogs')

    }

    return (
        <div className="flex justify-between items-center borderunde px-16 py-5">
            <Link to={'/'}> <div className="text-3xl font-semibold font-serif">Medium</div></Link>
            <div className="flex justify-center gap-5">
               
                {location.pathname === '/blog/create' ? (
                    <div onClick={publishBlog} className="font-serif rounded-full   bg-green-600 px-2 py-0.5 flex-col justify-center text-white font-light text-sm hover:bg-green-700 cursor-pointer">
                        Publish
                        </div>
                ) : (
                    <Link to={pathforwrite} className="font-serif flex gap-1">
                        <div className="flex flex-col justify-center">
                            <TfiWrite />
                        </div>
                        <div>Write</div>
                    </Link>
                )}


                {token ? <div className="font-serif"><Link to={'/user'}>Profile</Link></div> : <div className="font-serif"><Link to={'/signup'}>Get Started</Link></div>}
                

                <Link to={'/ourstory'}>
                <div className="font-serif">Our Story</div>

                </Link>
                

            </div>
        </div>
    )
}