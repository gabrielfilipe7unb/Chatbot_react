import React, { Component } from 'react';
import ChatHeader from './chatbot/ChatHeader';
import ChatConversa from './chatbot/ChatConversa';
import ChatMensagem from './chatbot/ChatMensagem';


class Chatbot extends Component {
    render (){
        return(
            <div className='chatbot'>
                <ChatHeader />
                <ChatConversa />
                <ChatMensagem />
            </div>
        )
    }
}

export default Chatbot;