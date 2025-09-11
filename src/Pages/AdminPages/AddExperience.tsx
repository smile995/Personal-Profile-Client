const AddExperience = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Experience</h2>
      <form className="space-y-3">
        <div>
          <label className="block mb-1">Role</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="MERN Stack Developer"
          />
        </div>

        <div>
          <label className="block mb-1">Company</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Tech Solutions Ltd"
          />
        </div>

        <div>
          <label className="block mb-1">Location</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Dhaka, Bangladesh"
          />
        </div>

        <div>
          <label className="block mb-1">Start Date</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Jan 2023"
          />
        </div>

        <div>
          <label className="block mb-1">End Date</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="Present"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            className="w-full border px-2 py-1 rounded"
            placeholder="Describe your responsibilities and achievements"
          />
        </div>

        <div>
          <label className="block mb-1">Technologies (comma separated)</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="React, Node.js, MongoDB, Tailwind CSS"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Experience
        </button>
      </form>
    </div>
  );
};

export default AddExperience;
