import { Link, Form, redirect } from 'react-router-dom'

import Modal from '../components/Modal'

import styles from './NewPost.module.sass'

const NewPost = () => {
  return (
    <Modal>
      <Form
        method="post"
        className={styles.form}
      >
        <p>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            required rows={3}
          />
        </p>
        <p>
          <label htmlFor="author">Your name</label>
          <input
            type="text"
            id="author"
            name="author"
            required
          />
        </p>
        <p className={styles.actions}>
          <Link
            className={styles.button}
            type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export async function action({ request }: any) {
  const formData = await request.formData()
  const post = Object.fromEntries(formData)
  try {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    })
    if (!response.ok) {
      throw new Error('Failed to add post')
    }
  } catch (error) {
    console.error('Error adding post:', error);
  }
  return redirect('/')
}

export default NewPost