import React from "react";
import RegisterForm from "../components/RegisterForm";
import EventList from "../components/EventList";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center p-6">
      {/* College Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-sm md:text-lg font-semibold text-blue-600 tracking-widest uppercase mb-2">
          Dr. D.Y. Patil Institute Of Masters Of Computer Application And Management, Akurdi
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-lg">
          🎉 College Event Registration Portal
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Register for exciting college events and manage your participation with ease!
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Registration Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-400 inline-block pb-1">
            📝 Register for an Event
          </h3>
          <RegisterForm />
        </div>

        {/* Event List Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-400 inline-block pb-1">
            📅 Upcoming Events
          </h3>
          <EventList />
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Dr. D.Y. Patil Institute, Akurdi | All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
