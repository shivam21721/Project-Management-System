import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app, fieldValue, auth } from "../../firebase/firebase";
import "./Chat.css"

function Chat() {
  let room = "temporaryRoom"
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = app.firestore().collection("messages");
  const { id } = useParams();
  room = id;
  console.log("room : ", room);
  useEffect(() => {
    
    const queryMessages = messagesRef
      .where("room", "==", room)
      .orderBy("createdAt");
      console.log("shivam")
    const unsubscribe = queryMessages.onSnapshot((snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    
    messagesRef.add({text: newMessage,
      createdAt: fieldValue.serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    }
    )

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Welcome to {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.user} :</span>  <span className="msg">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat