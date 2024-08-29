import { Link } from "react-router-dom";
import { AppBar } from "../components/Blog/AppBar"



export const Home = () =>{
  let buttontext = 'Start Reading';
  const token = localStorage.getItem('token');
  if (!token){
    buttontext = 'Get Started';
  }

  let pathname = '/blogs';
  if (!token){
    pathname = '/signin';
  }


   return (
    
    <div className="h-screen flex flex-col bg-gray-200 ">

      <div className="bg-yellow-500">
      <AppBar/>
      </div>
      
      <div className="bg-yellow-500 border-y px-16   border-black h-screen flex   ">
        
        <div className="flex flex-col">
          <div className="text-8xl pb-6 font-serif mt-10">
          Stay Curious.
          </div>
          <div className="text-2xl pb-4 font-medium">
           <div>Discover stories, thinking, and expertise from writers <br/> on any topic.</div> 
            </div>
       <Link to={pathname}>
       <button className="rounded-full bg-black text-white w-fit px-10 h-10  text-xl">
            {buttontext}
          </button>
        </Link>   
          
        </div>
        
      </div>
      <div className="px-16 py-5">
        <div className="flex gap-3 justify-center items-center font-mono">
         <Link to={'/ourstory'}>
         <div>
            About
          </div>
         </Link>

         
          <div>
            Help
          </div>

          <div>
            Privacy
          </div>

          <div>
            Terms
          </div>
          <Link to={'https://github.com/ssmehra7'} target="_blank" rel="noopener noreferrer">
          <div>
            Contact
          </div>
          </Link>
          

        </div>
      </div>
    </div>
    
    
   )
}