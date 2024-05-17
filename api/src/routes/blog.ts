// POST /api/v1/user/signup
// POST /api/v1/user/signin
// POST /api/v1/blog
// PUT /api/v1/blog
// GET /api/v1/blog/:id
// GET /api/v1/blog/bulk
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createPostInput, updatePostInput } from '@simar_sm11/medium-common';
import { Hono } from "hono";
import { verify } from "hono/jwt";

const app = new Hono<{
    Bindings:{
        DATABASE_URL: string
        JWT_SECRET:string,
    },
    Variables:{
        userId:string,
    }
}>();

// middleware-----------------------------------------
app.use('/blog/*',async(c,next)=>{
    const jwt = c.req.header("Authorization")||"";
    if (!jwt){
        c.status(403);
        return c.json({
            message:"No header is there"
        })
    }
    const token = jwt.split(" ")[1];
    const payload = await verify(token,c.env.JWT_SECRET);
    if (!payload){
        c.status(401);
        return c.json({
            message:"unauthorized verification failed",
        })

    }
//@ts-ignore
    c.set('userId',payload.id);
    await next();
});
//end-middleware-------------------------------------

app.post ('/blog',async (c)=>{
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());
    
    const body = await c.req.json();

    const {success} =createPostInput.safeParse(body);

    if (!success){
        c.status(411);
        return c.json({
            message:"zod input is not good in post",
        })
    }

    try{
        const post = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:authorId,
            }
        })

        return c.json({
            message:"post created",
            post
        })
    }catch(e){
        console.log(e);
        return c.json({
            message:"error while creating post",
        })
    }
})


app.put('/blog',async (c)=>{
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
     
    const body = await c.req.json();
    const {success} = updatePostInput.safeParse(body);
    if (!success){
        c.status(411);
        return c.json({
            message:"zod input is not good in post",
        })
    }
    
try{
  const blog = await prisma.post.update({
        where:{
            id:body.id,
            authorId:authorId,

        },
        data:{
            title:body.title,
            content:body.content
        }
    })

    return c.json({
        message:"post updated",
        id:blog.id,
        
    })

}catch(e){
    console.log(e);
    c.status(403);
    return c.json({
        message:"post is not updated"
    })
}
    
    
})



app.get('/blog/bulk',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try{
        const blogs = await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true,
                    }
                }
            }
        });

        return c.json({
            message:"blog/bulk is working fine",
            blogs,
        })
    }catch(e){
        console.log(e);
        c.status(400);
        return c.json({
            message:"something is wrong in blog/bulk",
        }) 
    }
    



    
})


app.get('/blog/:id',async (c)=>{
    const id = c.req.param('id');
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());


    try{
        const blog = await prisma.post.findUnique({
            where:{
                id
            },
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true,
                    }
                }
            }
        })
        return c.json({
            message:"successfull",
            blog
        })
    }catch(e){
        console.log(e);
        c.status(400);
        return c.json({
            message:"something is wrong in blog/:id",
        })

    }
    
})


export const blogRouter = app;