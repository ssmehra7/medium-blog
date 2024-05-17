import { useSelector } from "react-redux"



export const Profile = () =>{
    const user = useSelector((state)=>state.user.value);

    const allblog = useSelector((state)=>state.allblog.value);
    console.log(allblog);

    return (
        <div className="flex justify-center items-center h-screen">
            
            <div className="bg-slate-400 flex flex-col gap-4 w-1/4 rounded-md justify-center items-center">
                <div className="font-serif font-semibold text-lg ">
                    Name
                </div>
                <div>
                    {user.name}
                </div>

                <div  className="font-serif font-semibold text-lg ">
                    Email
                </div>
                <div>
                    {user.email}
                </div>
                <div  className="font-serif font-semibold text-lg ">
                    Password
                </div>
                <div>
                <div>
                    {user.password}
                </div>
                </div>


                
            </div>
            
            
        </div>
    )

}