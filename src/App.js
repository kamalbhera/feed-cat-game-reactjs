import logo from './cat.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [arr, setArr] = useState([]);
  
  const like = arr.map((_, index) => {
    return <div key={index} className='like-icon'></div>
  });

  function handleClick(event) {
    setArr([...arr, 1]);

    setTimeout(() => { 
      if (arr.length) setArr([]);
    }, 800);
  }

  return (
    <div className="App">
      <header className="App-header">
        {like}
        <img src={logo} className="App-logo" alt="logo" />
        <button className='App-button' onClick={handleClick}>Feed</button>
      </header>
    </div>
  );
}

export default App;
