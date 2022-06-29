
import React from 'react'
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions} from './urls'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Actions' isSmall />
    </div>
  );
}

export default App;
