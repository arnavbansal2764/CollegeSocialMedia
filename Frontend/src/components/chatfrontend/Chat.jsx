import React, { useEffect, useMemo, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const handelEnterPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-nowrap items-center align-middle justify-center">
      <div className="w-3/5 h-4/5 flex flex-wrap border-black border min-w-3/5 min-h-4/5">
        <div className="w-full text-center">
          <p>Live Chat : {username}</p>
        </div>
        <div className="flex w-full flex-wrap overflow-scroll">
          <ScrollToBottom>
            {messageList.map((messageContent) => {
              return (
                <div>
                  <div>
                    <div>
                      <p>{messageContent.message}</p>
                    </div>
                    <div>
                      <p>{messageContent.time}</p>
                      <p>{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="flex flex-nowrap h-12">
          <input
            className="border border-black h-10"
            type="text"
            value={currentMessage}
            placeholder=""
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyDown={handelEnterPress}
          />
          <button className="h-10" onClick={sendMessage}>
            &#9658;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
