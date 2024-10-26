import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-500 ease-in-out">
      <h1 className="text-5xl font-extrabold text-white mb-6 transform transition-transform duration-500 ease-in-out hover:scale-110">
        Health Dashboard
      </h1>
      <p className="text-lg text-yellow-100 mb-4 opacity-0 transition-opacity duration-500 delay-200 animate-fadeIn">
        Your personal health metrics at your fingertips
      </p>
      <button
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105"
        onClick={handleLogin}
      >
        Log In
      </button>
      <p className="text-yellow-100 mt-4 opacity-0 transition-opacity duration-500 delay-200 animate-fadeIn">
        Log in to access your profile and dashboard.
      </p>
    </div>
  );
};

export default Login;
