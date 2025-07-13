import React, { useContext } from 'react';
import "./App.css";

// ASSETS & ICONS
import va from "./assets/ai.png";
import aigif from "./assets/aiVoice.gif";
import speakgif from "./assets/speak.gif";
import { CiMicrophoneOn } from "react-icons/ci";

// CONTEXT
import { Datacontext } from './context/userContext';

function App() {
  const { speaking, prompt, response, result, startListening } = useContext(Datacontext);

  return (
    <div className='main'>
      <img src={va} alt="AVA" id="EVA" />
      <span>Hii I am AVA, YOUR Advanced Virtual Assistant</span>

      
      <div className='result-container'>
        {result && <p className='result-text'>{result}</p>}
      </div>

      {/* This block now handles the active interaction (button or listening UI) */}
      <div className='interaction-container'>
        {!speaking ? (
          <button onClick={startListening}>
            Click here <CiMicrophoneOn />
          </button>
        ) : (
          <div className="response">
            {!response ? <img src={speakgif} alt="Listening..." id="speak" /> : <img src={aigif} alt="Speaking..." id="aigif" />}
            
            <p>{prompt}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;