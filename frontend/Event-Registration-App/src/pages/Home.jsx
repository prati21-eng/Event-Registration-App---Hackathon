import React from "react";
import RegisterForm from "../components/RegisterForm";
import EventList from "../components/EventList";

const Home = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
      🎉 College Event Registration
    </h1>
    <RegisterForm />
    <EventList />
  </div>
);

export default Home;
