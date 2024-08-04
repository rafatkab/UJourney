import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Logout from './pages/Logout';

import Form from './pages/Form';
import Timeline from './pages/Timeline';

import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/LogIn';

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  //TODO - Other Loader Component
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex flex-row'>
      {isAuthenticated && <NavBar />}
      {/* // Create a blank page based on authenticated state of user, other wise redirect to logged in page with navbar */}
      <Routes>
        <Route path='/' element={<Home />} />
        {!isAuthenticated && (
          <>
            <Route path='/login' element={<Login />} />
          </>
        )}
        {isAuthenticated && (
          <>
            <Route path='/chatbot' element={<Chat />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/timeline' element={<Timeline />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </>
        )}
      </Routes>
    </div>
  );
}
