import React, { useEffect,useMemo, useState } from "react";
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

  const handelEnterPress = (event)=>{
    if(event.key==='Enter'){
        sendMessage();
    }
  }

  useEffect(() => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  },[])

  return (
    <div className="w-3/5 h-4/5 flex flex-wrap border-black border min-w-3/5 min-h-4/5">
      <div>
        <p>Live Chat</p>
      </div>
      <div>
        <ScrollToBottom>
          {messageList.map((messageContent) => {
            return (
              <div>
                <div>
                  <div >
                    <p>{messageContent.message}</p>
                  </div>
                  <div >
                    <p>{messageContent.time}</p>
                    <p >{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div>
        <input
          type="text"
          value={currentMessage}
          placeholder=""
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyDown={handelEnterPress}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;