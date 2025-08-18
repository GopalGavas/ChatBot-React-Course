import { useState, useEffect } from "react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import { Chatbot } from "supersimpledev";
import "./App.css";

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      "give me a four digit otp": function () {
        return `Sure here is your four digit otp: ${Math.floor(
          Math.random() * 9000 + 1000
        )}`;
      },
      "give me an unqiue Id": function () {
        return `Here is your unique Id ${crypto.randomUUID()}`;
      },
    });
  });

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
};

export default App;
