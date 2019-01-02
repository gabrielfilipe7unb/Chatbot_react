import React from 'react'
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'

const ChatMensagem = porps => {
    return (
        <div className='chat-mensagem'>
        <InputGroup>
            <Input placeholder='Digite aqui sua mensagem' />
            <InputGroupAddon addonType='append'>
                <Button color='success'>Enviar</Button>
            </InputGroupAddon>
        </InputGroup>
        </div>
    )
}

export default ChatMensagem;