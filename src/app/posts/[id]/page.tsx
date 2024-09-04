import { notFound } from "next/navigation";

const page = async() => {

    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(1);
        }, 1000);
    })

  // if(true){
  //   return notFound();
  // }

  return (
    <div className="flex justify-center items-center">
        <h1 className="text-4xl">Welcome to dynamic page of posts</h1>
    </div>
  )
}

export default page       