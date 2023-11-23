// App.js
import React from 'react';
import './App.css'
import Films from './components/Films';
import Searchbar from './components/common/Searchbar';
import Sidebar from './components/common/Sidebar';

function App() {
  return (
    <div className="App">
         <Searchbar />
        <Sidebar />
        <Films />
    
   
    </div>
  );
}

export default App;
