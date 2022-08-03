const ChatRoom = (props) => {
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