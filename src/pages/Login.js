import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect,isAuthenticated} = useAuth0();
  if(!isAuthenticated){
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );}
  else{
    return null;
  }
};

export default Login;
