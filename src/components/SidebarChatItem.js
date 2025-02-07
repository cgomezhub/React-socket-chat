import React from "react";

export const SidebarChatItem = ({ usuario }) => {
  return (
    <div className="chat_list">
      {/* active_chat */}
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
