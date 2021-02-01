import { Link } from 'gatsby';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styles from './styles.module.scss';
import fon from '@assets/images/image4.jpg';

interface IProps {
  siteTitle: string;
}

export const Placeholder = ({ children, text }) => {
  return <input className={styles.input} type="Email" placeholder={text} />;
};

const Modals = ({ children, toxin, choice, choice_2 }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className={styles.modal}>
      <button className={styles.button_modal} onClick={onOpenModal}>
        {choice}
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        {children}
        <div className={styles.modal__footer}>
          <h2 className={styles.modal_text}>{toxin}</h2>
          <button className={styles.button_modal}>{choice_2}</button>
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
