import { useState, useEffect } from 'react';
import io, {connect} from 'socket.io-client';

const ChatRoom = (props) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io();
    setSocket(socket);

    socket.on('connect', () => {
      console.log('connected');
    })

    return () => socket.disconnect();
    
  }, [])

  return (
    <>
      <div className="chat-box">
        Name: {props.name}
      </div>
      <div className="input-items">
        <input type='text' placeholder='send a message' />
        <button type='submit'>Send</button>
      </div>
    </>
  )
}

export default ChatRoom;