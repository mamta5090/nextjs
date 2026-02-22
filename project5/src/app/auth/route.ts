import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request:NextRequest){
    try{
        const {email,name,password}=await request.json();

        await connectDb();
        const exitUser=await User.findOne({email});
        if(!exitUser){
            return NextResponse.json({message:"User already exist"},{status:400})
        }
        const user=await User.create({email,name,password});
        return NextResponse.json({message:"User created successfully",user},{status:201})
    }catch(error){
        console.error("Error in user registration:", error);
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}