import React, { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/eventService";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    loadEvents();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Event List</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events found.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="border rounded-md p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-gray-500">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <button
                onClick={() => handleDelete(event._id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
