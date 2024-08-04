import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <div className='font-body flex flex-col justify-center items-center border h-screen w-screen'>
      <div className='flex flex-col itemp-center justify-center'>
        <h1 className='title text-center text-7xl text-black font-bold mb-6'>UJourney</h1>
        <h2 className='subtitle text-2xl text-gray-900 font-medium'>
          Personalized Career Path Navigator
        </h2>
        <p></p>
      </div>

      {!isAuthenticated && (
        <div className='flex flex-row justify-center j'>
          <button
            type='button'
            onClick={() => loginWithRedirect()}
            className='text-xl flex mt-8 text-white bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-4 me-2 mb-2'
          >
            Get Started
          </button> 
        </div>
      )}
    </div>
  );
}
