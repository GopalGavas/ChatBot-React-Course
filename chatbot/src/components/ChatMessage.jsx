// import userImage from "../assets/user.png";
import robotImage from "../assets/robot.png";
import myProfileImage from "../assets/MyPicture.jpg";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender }) => {
  return (
    <div
      className={sender === "user" ? "user-message" : "robot-message"}
      style={{ display: "flex", gap: "10px" }}
    >
      {sender === "robot" && <img src={robotImage} className="profile-image" />}
      <div className="text-message">{message}</div>
      {sender === "user" && (
        <img src={myProfileImage} className="profile-image" />
      )}
    </div>
  );
};

export default ChatMessage;
