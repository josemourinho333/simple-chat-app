import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

const EnterName = (props) => {
  return (
    <>
      <input type='text' placeholder='Enter your name' onChange={e => props.setName(e.target.value)} />
      <Link to='/chat' className="start-chat">Start Chatting</Link>
    </>
  )
}

export default EnterName;