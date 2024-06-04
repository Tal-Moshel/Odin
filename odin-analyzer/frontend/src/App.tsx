import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamSelectSidePanel from './components/TeamSelectSidePanel';

import { Drawer, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {
  return (
    <div className="App" color=''>
      <header className="App-header">
        <p>yeah</p>
        <TeamSelectSidePanel teams_list={[0,1,2,3]} on_teams_selected={(selected_teams) => {console.log(selected_teams)}}></TeamSelectSidePanel>
      </header>
    </div>
  );
}

export default App;
