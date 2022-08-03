import {useEffect, useState} from 'react';
import io from "socket.io-client";

const ChatRoom = (props) => {
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io();
    setSocket(socket);

    socket.on('connect', () => {
      const yourName = `${props.name}(You)`;
      const joinMsg = `${yourName} joined the chat`;
      setMessages(prev => [...prev, joinMsg]);
    });

    socket.emit('name', `${props.name}`);

    socket.on('joinShout', msg => {
      setMessages(prev => [...prev, msg]);
    })

    socket.on('relayUserMsg', msg => {
      setMessages(prev => [...prev, msg]);
    })

    socket.on('server', msg => {
      setMessages(prev => [...prev, msg]);
    })

    return () => socket.disconnect();
    
  }, [])

  const messageList = messages.map((msg, index) => {
    return (
      <li key={index}>{msg}</li>
    )
  })

  const sendMsg = () => {
    console.log('clicked');
    socket.emit('userMessage', { from: props.name, content})
  }

  return (
    <>
      <div className="chat-box">
        {messageList}
      </div>
      <div className="input-items">
        <input type='text' placeholder='send a message' onChange={e => setContent(e.target.value)} />
        <button onClick={sendMsg}>Send</button>
      </div>
    </>
  )
}

export default ChatRoom;