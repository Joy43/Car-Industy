import { connectDB } from "@/lib/connectDB";

export const GET = async (request) => {
  try {
    const { id } = await request.json(); 
    const db = await connectDB();
    const servicesCollection = db.collection('cars');
    
    const car = await servicesCollection.findOne({ _id: id }); 
    
    if (!car) {
      return new Response('Car not found', { status: 404 });
    }
    
    return new Response(JSON.stringify(car), { status: 200 });
  
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
