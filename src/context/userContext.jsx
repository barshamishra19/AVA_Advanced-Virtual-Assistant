import React, { createContext, useState } from 'react';
import { run } from "../gemini";

export const Datacontext = createContext();

function UserContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [userTranscript, setUserTranscript] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(false);
  
  // State for the final, persistent result
  const [result, setResult] = useState("");

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB";

    window.speechSynthesis.speak(text_speak);
  }
  
  // Updated function to handle more specific commands
  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank");
      speak("Opening Youtube");
      setResponse(true);
      setPrompt("Opening Youtube...");
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    } 
    else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank");
      speak("Opening Google");
      setResponse(true);
      setPrompt("Opening Google...");
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }
    else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/", "_blank");
      speak("Opening Instagram");
      setPrompt("Opening Instagram...");
      setResponse(true);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }
    // New command to get the current time
    else if (command.includes("time")) {
      const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
      speak(time);
      setResponse(true);
      setPrompt(time);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }
    // New command to get the current date
    else if (command.includes("date")) {
      const date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
      speak(date);
      setResponse(true);
      setPrompt(date);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }
    else {
      // If no specific command is matched, send to the AI
      aiResponse(command);
    }
  }

  async function aiResponse(promptText) {
    setLoading(true);
    try {
      const text = await run(promptText);

      // Your existing text manipulation logic
      const newText = text.split('*').join('').replace(/Google/gi, 'Barsha Mishra');
      
      setResult(newText);
      setPrompt(newText);
      speak(newText);
      setResponse(true);

      setTimeout(() => {
        setSpeaking(false);
      }, 5000);

    } catch (error) {
      console.error("Error in aiResponse:", error);
      speak("Sorry, I ran into an error.");
      setResponse(false);
      setSpeaking(false);
    } finally {
      setLoading(false);
    }
  }

  const startListening = () => {
    if (recognition) {
      setSpeaking(true);
      setResponse(false);
      setResult("");
      setPrompt("Listening...");
      recognition.start();
    } else {
      alert("Sorry, your browser does not support speech recognition.");
    }
  };

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    
    recognition.onresult = (e) => {
      let currentIndex = e.resultIndex;
      let transcript = e.results[currentIndex][0].transcript;
      setPrompt(transcript);
      takeCommand(transcript.toLowerCase());
    };

    recognition.onerror = ((e) => {
      console.error("Speech Recognition Error:", e.error);
      setSpeaking(false);
    });

  } else {
    console.error("This browser does not support Speech Recognition.");
  }

  const value = {
    recognition,
    aiResponse,
    loading,
    aiReply,
    speaking,
    setSpeaking,
    prompt,
    response,
    result,
    startListening,
    takeCommand,
  };

  return (
    <Datacontext.Provider value={value}>
      {children}
    </Datacontext.Provider>
  );
}

export default UserContext;