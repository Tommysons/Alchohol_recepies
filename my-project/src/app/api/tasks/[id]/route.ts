import prisma from "@/utils/conntect"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function DELETE (res: Request, { params} : {params: {id: string}}){
    try{
        const {userId} = auth()
        const { id } = params
        
        if(!userId) {
            return NextResponse.json({error: "Unauthorized", status: 401})
        }

        const task = await prisma.task.delete({
            where: {
                id,
            },
        })

        console.log("Task Deleted", task)
        return NextResponse.json(task)
    }catch (error){
        console.log("ERROR DELETING TASK: ", error)
        return NextResponse.json({error: "Error deleting task", status: 500})
    }
}
