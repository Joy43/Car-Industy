export const getCars=async()=>{

    const res=await fetch ('http://localhost:3000/cars/api/getall')
    const cars=res.json()
    return cars;
}
export const getCarsDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/cars/api/getall/${id}`)
    const car =  res.json()
    return car;
  }
  