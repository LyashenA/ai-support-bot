import React from "react";
import Message from "../message/Message";
import "./messageList.scss";

const MessageList = () => {
  return (
    <div className="message-list">
      <Message text="Здравствуйте!" />
      <Message text="Как скачать nanoCAD?" />
    </div>
  );
};

export default MessageList;
