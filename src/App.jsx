
import Header from './Components/Header.jsx';
import Cards from './Components/Cards.jsx';
import { useState } from 'react';

function App() {
  const [update,setupdate] =useState([0,0])
  return (
    <div style={{background:"black"}}>
    <Header update={update} setupdate={setupdate}></Header>
    <Cards update={update} setupdate={setupdate}></Cards>
    </div>
  )
}

export default App
