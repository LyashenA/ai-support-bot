import React from "react";
import MessageList from "../message_list/MessageList";
import MessageInput from "../message_input/MessageInput";
import "./chatWindow.scss";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
