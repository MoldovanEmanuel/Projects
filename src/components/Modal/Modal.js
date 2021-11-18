import styles from './Modal.module.css';

export function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
          <button className={styles['close-btn']} onClick={onClose}>
            &times;
          </button>
        <section className={styles.body}>{children}</section>
      </div>
    </div>
  );
}
