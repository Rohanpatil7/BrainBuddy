import Navbar from "../components/Navbar";

const Generate = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">Enter Topic</h2>
        <select className="border p-2 mb-2 block">
          <option>Class 5</option>
          <option>Class 6</option>
          <option>Class 7</option>
          <option>Class 8</option>
        </select>

        <select className="border p-2 mb-2 block">
          <option>Math</option>
          <option>Science</option>
        </select>

        <input
          type="text"
          placeholder="Enter topic (e.g. Fractions)"
          className="border p-2 block mb-4"
        />

        <button className="bg-blue-600 text-white px-6 py-2">
          Generate
        </button>
      </div>
    </>
  );
};

export default Generate;
