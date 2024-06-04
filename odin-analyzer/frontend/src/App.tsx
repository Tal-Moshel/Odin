import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamSelectSidePanel from './components/TeamSelectSidePanel';

function App() {
  return (
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
        <TeamSelectSidePanel teams_list={[0,1,2,3]} on_teams_selected={(selected_teams) => {console.log(selected_teams)}}></TeamSelectSidePanel>
      </header>
    </div>
  );
}

export default App;
