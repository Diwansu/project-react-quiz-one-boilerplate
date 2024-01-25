import React from 'react';
import './App.css';

       
import Home from './Components/homecomponent'
import Quiz from './Components/QuizComponent'
import Result  from './Components/resultcomponent' 

function App() {

  return (
    <div className="App">
            < Home/>
            <Quiz />
            < Result/> 
    </div>
  );
}

export default App;