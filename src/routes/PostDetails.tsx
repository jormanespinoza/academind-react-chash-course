import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import TPost from '../components/PostType';

import styles from './PostDetails.module.sass';

function PostDetails() {
  const post = useLoaderData() as TPost

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link
              to=".."
              className={styles.btn}
            >
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    )
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.content}</p>
      </main>
    </Modal>
  )
}

export async function loader({ params }: any): Promise<TPost> {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`)
  const data = await response.json()
  return data.post
}

export default PostDetails