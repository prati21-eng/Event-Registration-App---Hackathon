import React from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import RegisteredUsers from "../components/RegisteredUsers";

const Admin = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
      🧑‍💻 Admin Dashboard
    </h1>
    <EventForm refresh={() => window.location.reload()} />
    <EventList />
    <RegisteredUsers />
  </div>
);

export default Admin;
