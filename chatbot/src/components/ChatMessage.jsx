// import userImage from "../assets/user.png";
import robotImage from "../assets/robot.png";
import myProfileImage from "../assets/MyPicture.jpg";
import dayjs from "dayjs";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender, timestamp }) => {
  return (
    <div
      className={sender === "user" ? "user-message" : "robot-message"}
      style={{ display: "flex", gap: "10px" }}
    >
      {sender === "robot" && <img src={robotImage} className="profile-image" />}
      <div className="text-message-container">
        <p className="text-message">{message}</p>
        <p className="text-time">{dayjs(timestamp).format("h:mma")}</p>
      </div>
      {sender === "user" && (
        <img src={myProfileImage} className="profile-image" />
      )}
    </div>
  );
};

export default ChatMessage;
