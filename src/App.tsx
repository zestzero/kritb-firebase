import React from 'react';
import logo from './logo.svg';
import './App.css';
import DatabaseTest from 'components/DatabaseTest';
import FirebaseContext from 'hoc/withFirebase';
import FirebaseService from 'services/firebaseService';

const firebaseService = new FirebaseService();

function App() {
  return (
    <FirebaseContext.Provider value={firebaseService}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <DatabaseTest />
        </header>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
