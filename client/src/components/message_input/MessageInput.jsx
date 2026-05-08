import React from "react";
import "./messageInput.scss";

const MessageInput = () => {
  return (
    <div className="message-input">
      <input className="message-input__field" type="text" placeholder="Введите сообщение..." />
      <button className="message-input__button">
        Отправить
      </button>
    </div>
  );
};

export default MessageInput;
