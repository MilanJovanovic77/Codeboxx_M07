
import React, { useEffect, useState } from 'react';
import NavbarAgents from './scr/components/NavbarAgents';

const RecordAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('http://localhost:3004/api/agents'); 
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
        agents.map(agent => (
          <div key={agent._id} className="agent-record">
            <h3>{agent.first_name} {agent.last_name}</h3>
            <p>Email: {agent.email}</p>
            <p>Region: {agent.region}</p>
            <p>Rating: {agent.rating}</p>
            <p>Fee: ${agent.fee.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>No agents found.</p>
      )}
    </div>
  );
};

export default RecordAgents;
