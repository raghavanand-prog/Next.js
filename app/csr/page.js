"use client";

import { useState, useEffect } from "react";
import UserCard from "../../components/UserCard";

// "use client" makes this a Client Component, so this page is
// rendered in the browser. The users are fetched after the page loads.
export default function CSRDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Request failed");
        }
        const data = await res.json();
        setUsers(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">
        Client-Side Rendering (CSR)
      </h1>
      <p className="mb-6 text-slate-600">
        These users are fetched in the browser after the page loads.
      </p>

      {loading && <p className="text-slate-600">Loading...</p>}

      {!loading && error && (
        <p className="text-red-600">Unable to load data.</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  );
}
