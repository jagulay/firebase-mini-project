import './App.css';
import React, { useState, useEffect } from 'react';
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setTimeout(() => setLoading(false), 1000); // add delay
    });
    return () => unsubscribe();
  }, []);

  function register() {
    setLoading(true)
    createUserWithEmailAndPassword(auth, 'arra@email.com', 'password123')
      .then((user) => {
        console.log(user);
        setErrorMessage('');
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        setLoading(false)
      });
  }

  function login() {
    setLoading(true)
    signInWithEmailAndPassword(auth, 'arra@email.com', 'password123')
      .then((user) => {
        console.log(user);
        setErrorMessage('');
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage('The username and password you entered are incorrect.');
        setLoading(false)
      });
  }

  function logout() {
    signOut(auth);
  }

  console.log('Loading state:', loading);


  if (loading) {
    return (
      <div className="skeleton-loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <nav>
        <figure>
          {user && <FontAwesomeIcon className="menu" icon={faBars} />}
          <img src='https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png' alt="logo" />
        </figure>
        <div className='nav__links'>
          {!user ? (
            <>
              <button onClick={login}>Login</button>
              <button onClick={register} className='register__btn'>Register</button>
            </>
          ) : (
            <button onClick={logout}
            className='logged-in__btn'>{user.email[0].toUpperCase()}</button>
          )}
        </div>
      </nav>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default App;
