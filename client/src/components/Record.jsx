import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    name: "",
    position: "", // Updated for dropdown
    region: "",
    rating: "",
    fees: "",
    sales: "", // Sales field remains
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);
      if (!response.ok) {
        console.error(`An error has occurred: ${response.statusText}`);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Record with id ${id} not found`);
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
      const response = await fetch(`http://localhost:5050/record${params.id ? "/" + params.id : ""}`, {
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
      setForm({ name: "", position: "", region: "", rating: "", fees: "", sales: "" });
      navigate("/");
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update Agent Record</h3>
      <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">Employee Info</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="First Last"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
            </div>

            {/* Position Dropdown */}
            <div className="sm:col-span-4">
              <label htmlFor="position" className="block text-sm font-medium leading-6 text-slate-900">Position</label>
              <select
                name="position"
                id="position"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={form.position}
                onChange={(e) => updateForm({ position: e.target.value })}
              >
                <option value="">Select a position</option>
                <option value="Manager">Manager</option>
                <option value="Top Agent">Top Agent</option>
                <option value="Agent">Agent</option>
              </select>
            </div>

            {/* Region Dropdown */}
            <div className="sm:col-span-4">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-slate-900">Region</label>
              <div className="mt-2">
                <select
                  name="region"
                  id="region"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
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

            {/* Rating Input */}
            <div className="sm:col-span-4">
              <label htmlFor="rating" className="block text-sm font-medium leading-6 text-slate-900">Rating</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter rating"
                  value={form.rating}
                  onChange={(e) => updateForm({ rating: e.target.value })}
                />
              </div>
            </div>

            {/* Fees Input */}
            <div className="sm:col-span-4">
              <label htmlFor="fees" className="block text-sm font-medium leading-6 text-slate-900">Fees (USD)</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="fees"
                  id="fees"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Enter fees"
                  value={form.fees}
                  onChange={(e) => updateForm({ fees: e.target.value })}
                />
              </div>
            </div>

            {/* Sales Input */}
            <div className="sm:col-span-4">
              <label htmlFor="sales" className="block text-sm font-medium leading-6 text-slate-900">Sales (USD)</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="sales"
                  id="sales"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
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
          value="Save Agent Record"
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
        />
      </form>
    </>
  );
}