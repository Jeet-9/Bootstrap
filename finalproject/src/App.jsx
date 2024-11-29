import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import UserDetailsForm from './components/UserDetailsForm';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <UserDetailsForm />
      ) : (
        <AuthForm onLogin={handleLogin} />
      )}
      <Login/>
    </div>  
  );
};

export default App;
