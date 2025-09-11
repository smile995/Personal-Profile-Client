const CreateProject = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Project</h2>
      <form className="space-y-3">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Restaurant & Food Management App"
          />
        </div>

        <div>
          <label className="block mb-1">Short Description</label>
          <textarea
            className="w-full border px-2 py-1 rounded"
            placeholder="A full-stack platform to connect blood donors with recipients..."
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1">Long Description</label>
          <textarea
            className="w-full border px-2 py-1 rounded"
            placeholder="This platform simplifies the process of finding blood donors..."
            rows={5}
          />
        </div>

        <div>
          <label className="block mb-1">Technologies (comma separated)</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="React, Axios, Tanstack Query, MongoDB, Express, Firebase, JWT, Tailwind CSS, Stripe"
          />
        </div>

        <div>
          <label className="block mb-1">Features (comma separated)</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Built a role-based system..., Developed a modular backend..., Improved admin workflow..."
          />
        </div>

        <div>
          <label className="block mb-1">Image URL</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="https://assets.justinmind.com/wp-content/uploads/2020/02/website-mockup-design-jesica.png"
          />
        </div>

        <div>
          <label className="block mb-1">Live URL</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="https://github.com/smile995/"
          />
        </div>

        <div>
          <label className="block mb-1">Front-End URL</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="https://github.com/smile995/Bistro-Boss-frontend"
          />
        </div>

        <div>
          <label className="block mb-1">Back-End URL</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="https://github.com/smile995/Bistro-Boss-Backend"
          />
        </div>

        <div>
          <label className="block mb-1">Status</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="completed"
          />
        </div>

        <div>
          <label className="block mb-1">Challenges (comma separated)</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Implementing real-time data updates..., Integrating AI chatbot..."
          />
        </div>

        <div>
          <label className="block mb-1">Learnings (comma separated)</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Optimizing MongoDB queries, WebSocket integration..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
