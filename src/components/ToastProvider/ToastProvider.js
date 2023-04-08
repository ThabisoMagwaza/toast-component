import React from 'react';

import { useKeydown } from '../../hooks/';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = React.useState([]);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  const removeMessage = (index) => {
    setMessages((messages) => messages.filter((_, i) => i !== index));
  };

  const removeAllMessages = React.useCallback(() => setMessages([]), []);

  useKeydown('Escape', removeAllMessages);

  return (
    <ToastContext.Provider
      value={{
        messages,
        addMessage,
        removeMessage,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
