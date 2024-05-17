import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "../components/InputBox"

import { Quote } from "../components/Quote"
import { Button } from "../components/Button"
import { useState } from "react"
import {SignupType} from "@simar_sm11/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"



export const Signup = () => {
    const navigate = useNavigate();

    const [Input,setInput] = useState<SignupType>({
        email:"",
        password:"",
        name:""
    })

    async function SendRespone(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`,Input);
            console.log(response.data.token);
            console.log(response.data.user);
            localStorage.setItem('token',response.data.token);
            navigate("/signin");

        }catch(e){
            alert("something is wrong in the signup api connection");
            console.log(e);
        }
    }

    return (

        <div className="grid md:grid-cols-2">



            <div className="flex flex-col  justify-center items-center   bg-white h-screen">

                <div className="bg-zinc-50 shadow-lg rounded-lg w-1/2 flex justify-center items-center flex-col py-5">

                    <div className="pb-10 items-center text-center pt-3">
                        <div className="font-bold text-3xl text-black">Create an Account</div>
                        <div className="text-gray-500  text-md ">Already have an account?<Link className="underline pl-1" to={"/signin"}>Login</Link></div>

                    </div>

                    <InputBox label="Username" onChange={((e)=>{
                        setInput({
                            ...Input,
                            name:e.target.value,
                        })
                        
                    })} placeholder="Enter your email" type="text" />
                    <InputBox label="Email" onChange={((e)=>{
                        setInput({
                            ...Input,
                            email:e.target.value
                        })
                    })} placeholder="xyz@email.com" type="text" />
                    <InputBox label="Password" onChange={((e)=>{
                        setInput({
                            ...Input,
                            password:e.target.value,
                        })
                    })} placeholder="Enter your password" type="password" />
                    <Button onClick={SendRespone} label={"Signup"} />
                </div>

            </div>

            <div>
                <Quote label={"Unlock the door to a world of voices, stories, and ideas. Join our community, where every keystroke is a step towards shared experiences and endless possibilities."} />
            </div>


        </div>

    )
}