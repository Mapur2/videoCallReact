import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Video Call App
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            A real-time video chat platform for you and your team.
          </p>
          
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
              Join a Room
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md">
              Start a Video Call
            </button>
          </div>

          <div className="mt-6">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
