import React, { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { registerUser } from "../services/registrationService";

const RegisterForm = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", event: "" });

  useEffect(() => {
    getEvents().then((res) => setEvents(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    alert("✅ Registered successfully!");
    setForm({ name: "", email: "", event: "" });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Register for an Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={form.event}
          onChange={(e) => setForm({ ...form, event: e.target.value })}
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        >
          <option>Select Event</option>
          {events.map((e) => (
            <option key={e._id} value={e._id}>
              {e.title}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
