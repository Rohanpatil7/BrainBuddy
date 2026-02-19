import Navbar from "../components/Navbar";

const Result = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="border p-4 mb-6">
          AI summary will appear here.
        </div>

        <h2 className="text-2xl font-bold mb-4">Quiz</h2>
        <div className="border p-4">
          Quiz questions will appear here.
        </div>
      </div>
    </>
  );
};

export default Result;
