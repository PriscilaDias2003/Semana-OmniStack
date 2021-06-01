import React from 'react';

import Routes from './Routes';

import './global.css';

function App() {
  
  return (
    <Routes/>
  );
}

export default App;





/**
 * function App() {
 
   const [counter, setCounter] = useState(0);

    function increment(){
    setCounter(counter + 1);
  return (
    <div>
      <Header>
        Countador : {counter}
      </Header> 
      <button onClick = {increment}>Incrementar</button> 
    </div>
  );
}
 

  }
*/