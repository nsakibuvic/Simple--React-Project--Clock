import React, {useState} from "react";

function App() {

  const now = new Date().toLocaleTimeString([],{ hour12: false });
  
  const [time, getTime]= useState(now);

  function updateTime(){

    const newTime= new Date().toLocaleTimeString([],{hour12: false});

    getTime(newTime)
  }



  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick= {updateTime}>Get Time</button>
    </div>
  );
}

export default App;
