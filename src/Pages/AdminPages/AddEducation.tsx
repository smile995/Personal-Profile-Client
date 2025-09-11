import { useState } from "react";

const AddEducation = () => {
  const [education, setEducation] = useState({
    _id: "1",
    name: "",
    result: "",
    startDate: "",
    endDate: "",
    subject: "",
    summary: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Education data submitted:", education);
    // Here you can send the data to backend API
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Education</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1">University / College Name</label>
          <input
            type="text"
            name="name"
            value={education.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="CCN University of Science & Technology"
          />
        </div>

        <div>
          <label className="block mb-1">Result</label>
          <input
            type="text"
            name="result"
            value={education.result}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="CGPA 3.55 / 4.00"
          />
        </div>

        <div>
          <label className="block mb-1">Start Date</label>
          <input
            type="text"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="2022"
          />
        </div>

        <div>
          <label className="block mb-1">End Date</label>
          <input
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="2025 (present)"
          />
        </div>

        <div>
          <label className="block mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={education.subject}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="Computer Science and Engineering"
          />
        </div>

        <div>
          <label className="block mb-1">Summary</label>
          <textarea
            name="summary"
            value={education.summary}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="Describe your education experience..."
          />
        </div>

        <div>
          <label className="block mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={education.location}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            placeholder="Comilla, Bangladesh"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Education
        </button>
      </form>
    </div>
  );
};

export default AddEducation;
