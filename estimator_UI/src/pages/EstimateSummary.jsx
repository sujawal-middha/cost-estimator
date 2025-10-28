import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EstimateSummary() {
  const { selectedFeatures } = useSelector((state) => state.features);
  const navigate = useNavigate();
  const totalCost = selectedFeatures.reduce((sum, f) => sum + f.cost, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Web App Estimation Summary</h2>
      <p className="text-center text-4xl font-bold text-primary mb-8">${totalCost.toFixed(2)}</p>

      <div className="space-y-4">
        {selectedFeatures.map((feature) => (
          <div key={feature.id} className="border p-3 rounded-md shadow-sm">
            <p className="font-medium">{feature.name}</p>
            <p className="text-sm text-gray-500">+${feature.cost}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => navigate("/features")}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Edit Selection
        </button>
        {/* <button
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Request Detailed Quote
        </button> */}
      </div>
    </div>
  );
}

export default EstimateSummary;
