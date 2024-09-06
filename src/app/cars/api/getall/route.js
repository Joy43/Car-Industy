import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection('cars');

  try {
    const cars = await servicesCollection.find().toArray();
    console.log(cars)
    return Response.json({ cars });
  
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
