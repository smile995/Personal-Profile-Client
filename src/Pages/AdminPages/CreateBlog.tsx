const CreateBlog = () => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Blog</h2>
      <form className="space-y-3">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="How to Structure a Scalable MERN Stack Project"
          />
        </div>

        <div>
          <label className="block mb-1">Slug</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="how-to-structure-a-scalable-mern-stack-project"
          />
        </div>

        <div>
          <label className="block mb-1">Summary</label>
          <textarea
            className="w-full border px-2 py-1 rounded"
            placeholder="Explore folder structure, code splitting, and best practices..."
          />
        </div>

        <div>
          <label className="block mb-1">Date</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="June 28, 2025"
          />
        </div>

        <div>
          <label className="block mb-1">Tags (comma separated)</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="MERN Stack, Architecture"
          />
        </div>

        <div>
          <label className="block mb-1">Image URL</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block mb-1">Details</label>
          <textarea
            className="w-full border px-2 py-1 rounded"
            placeholder="MERN (MongoDB, Express, React, Node) stack projects can become unmanageable..."
            rows={6}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
