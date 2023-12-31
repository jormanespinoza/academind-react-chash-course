import { Link } from 'react-router-dom'

import TPost from './PostType'

import styles from './Post.module.sass'

interface Props {
  post: TPost
}

const Post = ({ post: { id, author, content } }: Props) => {
  return (
    <li className={styles.post}>
      <Link to={`/post/${id}`}>
        <article>
          <p className={styles.author}>{author}</p>
          <p className={styles.content}>{content}</p>
        </article>
      </Link>
    </li>
  )
}

export default Post