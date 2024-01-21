import React, { useEffect, useMemo, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";

function Chat({username, room }) {
  if(username!=""){
    const socket = io.connect("http://localhost:3001");
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
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      setMessageList((list) => messageData);
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
      socket.on("initial_chats",(chats)=>{
        console.log("chats are",chats)
        setMessageList(chats)
      })
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-nowrap items-center align-middle justify-center">
      <div className="w-3/5 h-4/5 flex flex-wrap border-black border min-w-3/5 min-h-4/5">
        <div className="w-full text-center">
          <p>Live Chat : {username}</p>
        </div>
        <div className="flex w-[100%] flex-wrap overflow-y-scroll h-[85%]">
          <ScrollToBottom>
            {messageList.map((messageContent) => {
              return (
                <div className="flex flex-row flex-wrap p-0 m-0 w-[70%]"
                style={{justifyContent:messageContent.author===username?"flexend":"flexstart", color:messageContent.author===username?"green":"red"
                }}  >
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
  );
  }
}

export default Chat;
