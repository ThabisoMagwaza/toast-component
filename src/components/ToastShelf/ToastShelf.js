import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts = [], onToastDismiss }) {
  const renderToasts = () => {
    const toastElements = [];

    for (let index = 0; index < toasts.length; index++) {
      const { variant, message } = toasts[index];

      if (!message) {
        continue;
      }

      toastElements.push(
        <li className={styles.toastWrapper} key={index}>
          <Toast variant={variant} onDismiss={() => onToastDismiss(index)}>
            {message}
          </Toast>
        </li>
      );
    }

    return toastElements;
  };

  return (
    <ol
      role={'region'}
      aria-live={'polite'}
      aria-label={'Notifications'}
      className={styles.wrapper}
    >
      {renderToasts()}
    </ol>
  );
}

export default ToastShelf;
