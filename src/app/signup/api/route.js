import { connectDB } from "@/lib/connectDB";
import bcript from "bcrypt"
export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        
        // -----------  Check if the user already exists   -------------
        
        const exist = await userCollection.findOne({ email: newUser.email });
        
        if (exist) {
            return new Response(
                JSON.stringify({ message: "User already exists" }),
                { status: 409 }
            );
        }
        const hashedPassword =bcript.hashSync(newUser.password,14);
        const resp=await userCollection.insertOne({...newUser, password:hashedPassword});

        
        // -------------     Insert new user    --------------
       
        
        return new Response(
            JSON.stringify({ message: "User created" }),
            { status: 201 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Something went wrong", error }),
            { status: 500 }
        );
    }
};
