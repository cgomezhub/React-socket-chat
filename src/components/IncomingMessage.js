import React from 'react'

export const IncomingMessage = ({mensaje}) => {
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{mensaje.mensaje}</p>
                    <span className="time_date"> {mensaje.createdAt}</span>
                </div>
            </div>
        </div>
    )
}
