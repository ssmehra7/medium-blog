import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { bodyLimit } from "hono/body-limit";
import {signinInput, signupInput} from "@simar_sm11/medium-common"

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET:string
    }
}>();

 



app.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL	,
        }).$extends(withAccelerate());
        
        const body = await c.req.json();
        const {success} = signinInput.safeParse(body);

        if (!success){
            c.status(411);
            return c.json ({
                message:" zod input is not valid ",
            })
        }

        const user = await prisma.user.findUnique({
            where:{
                email:body.email,
                password:body.password
            }
        })

        if (!user){
            c.status(403);
            return c.json({
                message:"user not found",
            })
        }

        const token = await sign({id:user.id},c.env.JWT_SECRET);
        return c.json({
            message:"route success",
            user,
            token
        })

})


//--------------------------------------------------------------------------//


app.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    
    const {success} = signupInput.safeParse(body);
    if (!success){
        c.status(411);
        return c.json ({
            message:" zod input is not valid ",
        })
    }

    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: body.password
            }
        });

        const token = await sign({id:user.id}, c.env.JWT_SECRET);

        return c.json({
            message: "jwt here",
            user,
            token,

        });
    } catch (e) {
        return c.status(403);
    }
})



export const userRouter = app; 