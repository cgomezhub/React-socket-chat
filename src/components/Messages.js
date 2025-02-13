import React, {useContext} from 'react';

import {ChatContext} from '../context/chat/ChatContext'
import {AuthContext} from '../auth/AuthContext'

import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    // const msgs = [1,2,3,4,5,6,7,8,9,10];?

    
    const {auth} = useContext(AuthContext)

    const {chatState} = useContext(ChatContext)

    const {mensajes} = chatState

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div id='mensajes'className="msg_history">

                {
                    mensajes.map( msg => (
                        (msg.para === auth.uid)
                            ? <IncomingMessage key={ msg._id } mensaje={msg} />
                            : <OutgoingMessage key={ msg._id } mensaje ={msg} />
                    ))
                }

                

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
    )
}
