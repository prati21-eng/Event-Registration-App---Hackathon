import React, { useEffect, useState } from "react";
import { getRegistrations } from "../services/registrationService";

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getRegistrations().then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Registered Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No users registered yet.</p>
      ) : (
        <ul className="divide-y">
          {users.map((u) => (
            <li key={u._id} className="py-2">
              <p className="font-medium">{u.name}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
              <p className="text-sm text-blue-600">{u.event?.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegisteredUsers;
