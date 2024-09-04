import Link from "next/link"

export const PostList = async() => {

  await new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1200);
  })

  return (
    <div className='text-2xl font-medium flex flex-col gap-2'>
    {
      [1,2,3,4,5,6].map(element=>(
          <Link href={`/posts/${element}`} key={element}>{element}</Link>
      ))
    }
  </div>
  )
}
