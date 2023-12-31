import { useLoaderData } from 'react-router-dom'

import Post from './Post'
import TPost from './PostType'

import styles from './PostsList.module.sass'

const PostsList = () => {
  const posts: TPost[] = useLoaderData() as TPost[]

  const getPosts = () => {
    if (posts.length === 0) {
      return (
        <div className={styles.noPosts}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )
    }
    return (
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    )
  }

  return (
    <>
      {getPosts()}
    </>
  )
}

export default PostsList