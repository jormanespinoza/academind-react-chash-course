import { Outlet } from 'react-router-dom'

import PostsList from '../components/PostsList'
import TPost from '../components/PostType'

const Posts = () => {
  return (
    <>
      <Outlet />
      <PostsList />
    </>
  )
}

export async function loader(): Promise<TPost[]> {
  const response = await fetch('http://localhost:8080/posts')
  const data = await response.json()
  return data.posts
}

export default Posts
