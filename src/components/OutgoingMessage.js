import React from 'react'

export const OutgoingMessage = ({mensaje}) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{mensaje.mensaje}</p>
                <span className="time_date">{mensaje.createdAt}</span>
            </div>
        </div>
    )
}
