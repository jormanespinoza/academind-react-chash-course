import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Modal.module.sass'

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props) => {
  const navigate = useNavigate()
  const closehandler = () => {
    navigate('..')
  }

  return (
    <>
      <div
        className={styles.backdrop}
        onClick={closehandler}
      />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
