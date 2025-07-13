# AVA - Advanced Virtual Assistant

AVA is a voice-powered virtual assistant that runs in your web browser. You can ask it questions, get the current time and date, and command it to open popular websites like Google and YouTube. AVA uses the power of AI to understand and respond to your queries in real-time.

This project was developed by **Barsha Mishra**.

## 🌟 Features

*   **Voice-Activated Commands**: Interact with AVA using natural speech.
*   **AI-Powered Answers**: Ask general knowledge questions and get intelligent answers powered by the Gemini AI model.
*   **Real-Time Information**: Instantly get the current time and date.
*   **Web Navigation**: Command AVA to open Google and YouTube in a new tab.
*   **Voice Feedback**: AVA speaks its responses back to you.
*   **User-Friendly Interface**: A simple and intuitive interface that provides visual feedback when listening or speaking.

## 🛠️ Tech Stack

*   **Frontend**: React.js
*   **AI Model**: Google's Gemini 1.5 Flash
*   **Speech Recognition**: Web Speech API (`window.SpeechRecognition`)
*   **Text-to-Speech**: Web Speech API (`window.speechSynthesis`)
*   **Styling**: CSS with Google Fonts

## ⚙️ How It Works

AVA is built as a single-page React application. Here’s a brief overview of its functionality:

1.  **Activation**: The user clicks a button to start the speech recognition service in the browser.
2.  **Listening**: The application listens for a voice command and transcribes it into text.
3.  **Command Processing**: The transcribed text is processed to check for specific keywords (e.g., "open youtube," "time," "date").
4.  **Action Execution**:
    *   If a command matches a predefined action (like opening a website or getting the time), the corresponding function is executed.
    *   If the command is a general question, it is sent to the Gemini AI model via an API call.
5.  **Response**: The result—whether from a direct action or the AI—is displayed on the screen and spoken aloud by the assistant.

## 🚀 Getting Started Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or yarn) installed on your system.
*   A Google Gemini API key.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/barshamishra19/AVA_Advanced-Virtual-Assistant.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd AVA_Advanced-Virtual-Assistant
    ```

3.  **Install the required dependencies:**
    ```sh
    npm install
    ```

4.  **Set up your environment variables:**
    *   Create a file named `.env` in the root of your project.
    *   Add your Gemini API key to this file:
        ```
        VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
        ```

5.  **Start the development server:**
    ```sh
    npm run dev
    ```

You can now open your browser and navigate to the local address provided (usually `http://localhost:5173`) to use the application.

## 👏 Acknowledgements

A heartfelt thank you to the creators and maintainers of the open-source libraries and APIs that made this project possible.
