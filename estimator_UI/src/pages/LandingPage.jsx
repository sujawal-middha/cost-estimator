import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AppEstimator</h1>
      <p className="text-gray-600 mb-6">Estimate your app development cost in minutes.</p>
      <Link
        to="/features"
        className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Start Estimating
      </Link>
      <p className="text-sm text-gray-500 mt-4">Trusted by 100+ startups</p>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl">
        <div className="bg-white shadow p-4 rounded-xl">
          <h3 className="font-semibold">Choose Features</h3>
          <p className="text-sm text-gray-500">Select the features you need for your app.</p>
        </div>
        <div className="bg-white shadow p-4 rounded-xl">
          <h3 className="font-semibold">View Estimate</h3>
          <p className="text-sm text-gray-500">Get a detailed cost breakdown instantly.</p>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
