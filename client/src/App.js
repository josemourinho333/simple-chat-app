import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ChatRoom from './components/ChatRoom';
import EnterName from './components/EnterName';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <h1><Link to='/'>Simple Chat App</Link></h1>

      <Routes>
        <Route path='/' element={
          <EnterName 
            setName={setName}
          />
        }/>
        <Route path='/chat' element={
          <ChatRoom 
            name={name}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
