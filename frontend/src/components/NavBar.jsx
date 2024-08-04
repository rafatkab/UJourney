import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWpforms, FaBars } from 'react-icons/fa';
import { CiChat2 } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logout, isAuthenticated } = useAuth0();

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex'>
      <aside
        className={`h-screen bg-black text-white flex flex-col justify-between font-body duration-300 ${
          isOpen ? 'w-[20vw]' : 'w-[5vw]'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-space-between [&>*]:mt-3`}
        >
          <div
            className={`${
              isOpen ? 'flex flex-row justify-end p-4 w-[20vw]' : null
            }`}
          >
            <button
              onClick={toggleNavBar}
              className={`${isOpen ? 'mr-4' : 'mt-3'} text-3xl duration-300`}
            >
              <FaBars />
            </button>
          </div>
          {isOpen && (
            <>
              <img className='ml-7 w-28' src='./white-logo.png' alt='logo' />
              <div className='flex flex-col justify-center items-center text-2xl space-y-2'>
                <Link
                  className='w-[250px] flex justify-center items-center hover:bg-gray-600 rounded-md p-3'
                  to='/home'
                >
                  <IoHomeOutline />
                  <div className='ml-3'>Home</div>
                </Link>
                <Link
                  className='w-[250px] flex justify-center items-center hover:bg-gray-600 rounded-md p-3'
                  to='/form'
                >
                  <FaWpforms />
                  <div className='ml-3'>Form</div>
                </Link>
                <Link
                  className='w-[250px] flex justify-center items-center hover:bg-gray-600 rounded-md p-3'
                  to='/chatbot'
                >
                  <CiChat2 />
                  <div className='ml-3'>Chatbot</div>
                </Link>
                
              </div>
            </>
          )}
          {!isOpen && (
            <div className='flex flex-col'>
              <Link
                className='flex items-center hover:bg-gray-600 rounded-md p-3 text-xl'
                to='/home'
              >
                <IoHomeOutline />
              </Link>
              <Link
                className='flex items-center hover:bg-gray-600 rounded-md p-3 text-xl'
                to='/form'
              >
                <FaWpforms />
              </Link>
              <Link
                className=' flex items-center hover:bg-gray-600 rounded-md p-3 text-xl'
                to='/chatbot'
              >
                <CiChat2 />
              </Link>
            </div>
          )}
        </div>
        {isAuthenticated ? (
          <div
            className={`flex flex-col w-full relative justify-center p-4 space-y-4`}
          >
            <div className='relative w-full flex flex-row justify-around items-center'>
              <div className='relative w-14 h-14 rounded-full overflow-hidden border-white border-2 flex justify-center items-center'>
                <img className='w-auto' src={user.picture} alt='logo' />
              </div>
              {isOpen && (
                <p className='text-white text-md relative'>{user.name}</p>
              )}
            </div>

            <button
              type='button'
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2'
            >
              {isOpen && 'Log Out'}
              {!isOpen && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                  />
                </svg>
              )}
            </button>
          </div>
        ) : (
          isOpen && (
            <div className='flex justify-center'>
              <Link to='/login'>
                <button
                  type='button'
                  className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2'
                >
                  Log In
                </button>
              </Link>
            </div>
          )
        )}
      </aside>
    </div>
  );
}
