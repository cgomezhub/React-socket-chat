import React, {useContext} from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { types } from "../types/types";

export const SidebarChatItem = ({ usuario }) => {



  const { chatState, dispatch } = useContext(ChatContext);


  const onClick = () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.uid,
    });

  }

  return (
    <div className={`chat_list ${usuario.uid === chatState.chatActivo && 'active_chat'}`}
      onClick={onClick}
      >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {usuario.online ? (
            <span className="text-success">online</span>
          ) : (
            <span className="text-danger">offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
