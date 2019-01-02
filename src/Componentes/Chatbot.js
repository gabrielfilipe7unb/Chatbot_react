import React, { Component } from 'react';

import './chatbot/chatbot.css'
import ChatHeader from './chatbot/ChatHeader';
import ChatConversa from './chatbot/ChatConversa';
import ChatMensagem from './chatbot/ChatMensagem';


class Chatbot extends Component {
    render (){
        return(
            <div className='chatbot'>
                <div className='chat-conteudo'>
                <ChatHeader />
                <ChatConversa />
                <ChatMensagem />
                </div>
            </div>
        )
    }
}

export default Chatbot;