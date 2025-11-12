import React, { useState } from "react";
import { createEvent } from "../services/eventService";
import { motion } from "framer-motion";

const EventForm = ({ refresh }) => {
  const [form, setForm] = useState({ title: "", date: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createEvent(form);
    refresh();
    setForm({ title: "", date: "", description: "" });
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg rounded-2xl p-8 mb-6 border border-blue-100"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        ✨ Add a New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Event Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Event Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter event title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Event Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            required
          />
        </div>

        {/* Event Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Write a short description about the event..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-3 h-28 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-lg font-semibold text-white shadow-md transition-all duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700"
          }`}
        >
          {loading ? "Adding Event..." : "Add Event 🚀"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EventForm;
