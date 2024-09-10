import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection('cars');

  try {
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    
    return new Response(JSON.stringify({ message: "Cars inserted successfully", data: resp }), { status: 200 }); 
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error inserting cars", error: error.message }), { status: 500 });
  }
};
