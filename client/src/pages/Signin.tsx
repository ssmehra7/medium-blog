import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "../components/InputBox"
import { Quote } from "../components/Quote"
import { Button } from "../components/Button"
import { SigninType } from "@simar_sm11/medium-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useDispatch, useSelector } from "react-redux"
import { adduser } from "../redux/slice/userSlice"





export const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.value);
    

    const [Input,setInput] = useState<SigninType>({
        email:"",
        password:"",
        
    })

   async function  SendRespone(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,Input);
            console.log(response.data.token);
            console.log(response.data.user);
            dispatch(adduser(response.data.user));
            console.log(user);


            localStorage.setItem('token',response.data.token);
            navigate("/blogs")


        }catch(e){
            alert("something is wrong"); 
            console.log(e);
        }
    }

    return (
        <div className=" grid md:grid-cols-2">
            <div className="flex flex-col  justify-center items-center   bg-white h-screen">

                <div className="bg-zinc-50 shadow-lg rounded-lg w-1/2 flex justify-center items-center flex-col py-5">

                    <div className="pb-10 items-center text-center">
                        <div className="font-bold text-3xl text-black">Login</div>
                        <div className="text-gray-500  text-md font-serif ">{`Don't have account?`}<Link className="underline pl-1 font-serif" to={"/signup"}>Register</Link></div>

                    </div>

                    
                    <InputBox label="Email" onChange={((e)=>{
                        setInput({
                            ...Input,
                            email:e.target.value,
                        })
                    })} placeholder="xyz@email.com" type="text" />
                    <InputBox label="Password" onChange={((e)=>{
                        setInput({
                            ...Input,
                            password:e.target.value,
                        })
                    })} placeholder="Enter your password" type="password" />
                    <Button label={"Signin"} onClick={SendRespone}/>
                </div>
                

            </div>
            <div>
                <Quote label="Step into a world of boundless expression, where every keystroke paints a portrait of your story.Let your voice resonate through the corridors of our digital realm." />
            </div>

        </div>
    )
}