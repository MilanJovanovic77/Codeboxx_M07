
import React, { useEffect, useState } from 'react';
const RecordListAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(`http://localhost:5050/agents/`); // Corrected endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAgents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) return <p>Loading agents...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Agents List</h2>
      {agents.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Region</th>
              <th>Rating</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {agents.map(agent => (
              <tr key={agent._id}>
                <td>{agent.first_name}</td>
                <td>{agent.last_name}</td>
                <td>{agent.email}</td>
                <td>{agent.region}</td>
                <td>{agent.rating}</td>
                <td>${agent.fee.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No agents found.</p>
      )}
    </div>
  );
};

export default RecordListAgents;