
import { getCarsDetails } from "@/lib/services/getServices";

const page =  ({ params }) => {

  const { id}= params;

  // const details = await getCarsDetails(params.id);
  const response =  fetch(`/cars/api/deatils` , {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id}),
  });

  
  const data = response.json()


  console.log(data)

  

  // const { title, description, img, price } = details.car;

  return (
    <>
      {/* <h1>{details.title}</h1> */}
      {/* <img src={img} alt={title} />
      <p>{description}</p>
      <h2>Price: ${price}</h2> */}
    </>
  );
};

export default page;
