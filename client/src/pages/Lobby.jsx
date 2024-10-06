import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

function Lobby() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const socket = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("room:join", { email, room });
  };

  const handleRoom = useCallback((data) => {
    const { room } = data;
    navigate(`/room/${room}`);
  }, [navigate]);

  useEffect(() => {
    socket.on("room:join", handleRoom);
    return () => {
      socket.off("room:join", handleRoom);
    };
  }, [socket, handleRoom]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">VideoCall App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow container mx-auto py-16 px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-6">
            Seamless Peer-to-Peer Video Communication
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Join rooms, start video calls, and connect with anyone, anywhere.
            Experience high-quality video and audio in real time.
          </p>
          <div className="mt-8">
            <a
              href="#join-room"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="join-room"
        className="bg-gray-800 py-12 rounded-t-lg shadow-inner"
      >
        <div className="container mx-auto max-w-lg">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Join a Video Call Room
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-300"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="room"
                className="block text-lg font-medium text-gray-300"
              >
                Room Number
              </label>
              <input
                type="text"
                id="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
              >
                Join Room
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-12">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} VideoCall App. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Lobby;
