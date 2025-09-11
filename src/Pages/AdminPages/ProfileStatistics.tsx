const ProfileStatistics = () => {
  const stats = [
    { id: 1, title: "Projects Completed", value: 12 },
    { id: 2, title: "Years of Experience", value: 3 },
    { id: 3, title: "Happy Clients", value: 8 },
    { id: 4, title: "Skills Learned", value: 15 },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Profile Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
            <p className="text-gray-600 mt-2">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileStatistics;
