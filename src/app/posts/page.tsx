import { PostList } from '@/components/Posts/PostList';
import { Suspense } from 'react';

const page = async() => {

  return (
    <div className='flex justify-center items-center flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Beautiful Posts</h1>

        <Suspense fallback={<p>loading....</p>}>
          <PostList/>
        </Suspense>
        
    </div>
  )
}

export default page

// result of caches are stored in data-cache
// so basically on server side there are 2 types of caches
// 1) fetch api cache that we can disable using no-cache or can set a revalidation limit of some time
// 2) full route cache [ it means all the component in this route or it's subcomponents will be rendered once and cached]