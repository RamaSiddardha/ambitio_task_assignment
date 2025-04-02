

  export default function StatsCard() {
    const stats = [
      { value: "98.2%", label: "got into their Target Program" },
      { value: "4.96", label: "Google Rating" },
      { value: "30,000+", label: "Students Assisted" }
    ];
  
    return (
      <section className="mx-8 my-8  lg:mx-16 lg:my-4 bg-red-50 p-6 md:p-10 rounded-2xl shadow-lg text-center">
        <h2 className=" px-4 text-lg md:text-2xl font-semibold text-gray-900">
          We let <span className="text-red-600 font-bold">our numbers</span> do the talking
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Our users love us and we know you will too! Explore our products.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-4xl font-bold text-red-600">{stat.value}</p>
              <p className="text-gray-700 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }