import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    region: "",
    rating: "",
    fee: "",
    position: "",
    sales: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      const response = await fetch(`http://localhost:5050/agents/${params.id}`);
      if (!response.ok) {
        console.error(`An error has occurred: ${response.statusText}`);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Agent with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(record);
    }
    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      const response = await fetch(`http://localhost:5050/agents/${params.id}`, {
        method: `${params.id ? "PATCH" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        region: "",
        rating: "",
        fee: "",
        position: "",
        sales: "",
      });
      navigate("/");
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update Agents Record</h3>
      <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
        <div className="grid gap-y-6">
          {/* First Row - Agents Info */}
          <div className="col-span-2">
            <h2 className="text-base font-semibold leading-7 text-slate-900">Agents Info</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          {/* Second Row - First Name and Last Name */}
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-slate-900">First Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="First Name"
                  value={form.first_name}
                  onChange={(e) => updateForm({ first_name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-slate-900">Last Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={(e) => updateForm({ last_name: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Third Row - Position and Region */}
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              <label htmlFor="position" className="block text-sm font-medium leading-6 text-slate-900">Position</label>
              <select
                name="position"
                id="position"
                className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.position}
                onChange={(e) => updateForm({ position: e.target.value })}
              >
                <option value="">Select a position</option>
                <option value="Manager">Manager</option>
                <option value="Top Agent">Top Agent</option>
                <option value="Agent">Agent</option>
              </select>
            </div>
            <div>
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-slate-900">Region</label>
              <select
                name="region"
                id="region"
                className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.region}
                onChange={(e) => updateForm({ region: e.target.value })}
              >
                <option value="">Select a region</option>
                <option value="North">North</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="South">South</option>
              </select>
            </div>
          </div>

          {/* Fourth Row - Rating, Fee, and Sales */}
          <div className="grid grid-cols-3 gap-x-6">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium leading-6 text-slate-900">Rating</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter rating"
                  value={form.rating}
                  onChange={(e) => updateForm({ rating: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="fee" className="block text-sm font-medium leading-6 text-slate-900">Fees (USD)</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="fee"
                  id="fee"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter fee"
                  value={form.fee}
                  onChange={(e) => updateForm({ fee: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="sales" className="block text-sm font-medium leading-6 text-slate-900">Sales (USD)</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="sales"
                  id="sales"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter sales"
                  value={form.sales}
                  onChange={(e) => updateForm({ sales: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Save Agents Record"
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
        />
      </form>
    </>
  );
}
