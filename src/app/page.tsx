import Image from "next/image"

const page = () => {
  return (
    <>
    <div>Home</div>
    <Image alt="random image" src="https://images.unsplash.com/photo-1725053773231-4f4353debe07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" width={50} height={50}/>
    </>
  )
}

export default page