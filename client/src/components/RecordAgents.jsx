
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecordAgents() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    region: "",
    rating: "",
    fees: "",
    sales: "",
  });
  const params = useParams(); // useParams gets URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      // If there's no ID in the params, do nothing
      const id = params.id?.toString() || undefined;
      if (!id) return;

      try {
        // Fetch the agent information by ID
        const response = await fetch(`http://localhost:5050/agents/${id}`);
        if (!response.ok) {
          throw new Error(`An error has occurred: ${response.statusText}`);
        }
        const record = await response.json();
        if (!record) {
          console.warn(`Agent with id ${id} not found`);
          navigate("/agents");
          return;
        }
        setForm(record);
      } catch (error) {
        console.error("Error fetching agent:", error);
      }
    }

    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const agent = { ...form };
    try {
      const response = await fetch(`http://localhost:5050/agents${params.id ? "/" + params.id : ""}`, {
        method: `${params.id ? "PATCH" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agent),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ first_name: "", last_name: "", region: "", rating: "", fees: "", sales: "" });
      navigate("/agents");
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update Agent Record</h3>
      {/* Similar form structure as in Record.jsx */}
    </>
  );
}
