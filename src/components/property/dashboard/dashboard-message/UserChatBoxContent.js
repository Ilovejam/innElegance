import Image from "next/image";
import React from "react";

const chatMessages = [
  {
    className: "sent float-start",
    imageUrl: "/images/testimonials/png-transparent.png",
    name: "Murat Doğan",
    time: "35 dakika önce",
    message:
      "Villa Enbaem'in otoparkı bulunuyor mu?",
  },
  
  
];

const ChatMessage = ({ message }) => {
  return (
    <li className={message.className}>
      <div
        className={`d-flex align-items-center ${
          message.className === "sent float-start"
            ? "mb15"
            : "justify-content-end mb15"
        }`}
      >
        {message.className === "sent float-start" ? (
          <Image
            width={50}
            height={50}
            className="img-fluid rounded-circle align-self-start mr10"
            src={message.imageUrl}
            alt={`${message.name}'s profile`}
          />
        ) : null}
        <div
          className={`title fz14 ${
            message.className === "reply float-end" ? "mr10" : "ml10"
          }`}
        >
          {message.className === "reply float-end" ? (
            <small>{message.time}</small>
          ) : (
            <>
              {message.name} <small className="ml10">{message.time}</small>
            </>
          )}
        </div>
        {message.className === "reply float-end" ? (
          <Image
            width={50}
            height={50}
            className="img-fluid rounded-circle align-self-end ml10"
            src={message.imageUrl}
            alt={`${message.name}'s profile`}
          />
        ) : null}
      </div>
      <p>{message.message}</p>
    </li>
  );
};

const UserChatBoxContent = () => {
  return (
    <>
      {chatMessages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </>
  );
};

export default UserChatBoxContent;
