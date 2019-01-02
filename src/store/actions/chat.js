export const enviaMensagem = (mensagem) => {
    return {
        type: 'envia_mensagem',
        payload: {mensagem}
    }
}
