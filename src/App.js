import './components/UI/stopwatch.scss'
import React from 'react';
import StopwatchHeader from "./components/UI/stopwatch.header";
import StopwatchBody from "./components/UI/stopwatch.body";


function App() {
  return (
    <div className="App">
      <StopwatchHeader/>
        <StopwatchBody/>

    </div>
  );
}

export default App;
