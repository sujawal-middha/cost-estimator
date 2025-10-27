// import { useEffect, useState } from "react";
// import { getCategories, getFeaturesByCategory } from "../api/api";
// import CategorySidebar from "../components/CategorySidebar";
// import FeatureCard from "../components/FeatureCard";
// import ProgressBar from "../components/ProgressBar";
// import { useDispatch, useSelector } from "react-redux";
// import { addFeature, removeFeature } from "../store/featureSlice";
// import { useNavigate } from "react-router-dom";

// function FeatureSelection() {
//   const [categories, setCategories] = useState([]);
//   const [features, setFeatures] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const selectedFeatures = useSelector((state) => state.features.selectedFeatures);

//   useEffect(() => {
//     getCategories().then(setCategories);
//   }, []);

//   useEffect(() => {
//     if (selectedCategory) getFeaturesByCategory(selectedCategory).then(setFeatures);
//   }, [selectedCategory]);

//   const handleFeatureSelect = (feature) => {
//     if (selectedFeatures.find((f) => f.id === feature.id)) {
//       dispatch(removeFeature(feature.id));
//     } else {
//       dispatch(addFeature(feature));
//     }
//   };

//   const progress = Math.round((selectedFeatures.length / 50) * 100); // adjust based on total features

//   return (
//     <div className="flex flex-col md:flex-row gap-6 p-6">
//       <CategorySidebar
//         categories={categories}
//         selectedId={selectedCategory}
//         onSelect={setSelectedCategory}
//       />
//       <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
//         <ProgressBar progress={progress} />
//         <h2 className="text-2xl font-semibold mb-4">
//           Select Features for Your App
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {features.map((feature) => (
//             <FeatureCard
//               key={feature.id}
//               feature={feature}
//               onSelect={handleFeatureSelect}
//               selected={selectedFeatures.some((f) => f.id === feature.id)}
//             />
//           ))}
//         </div>
//         <div className="flex justify-between mt-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => navigate("/summary")}
//             className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeatureSelection;


import { useEffect, useState } from "react";
import { getCategories } from "../api/api";
import CategorySidebar from "../components/CategorySidebar";
import FeatureCard from "../components/FeatureCard";
import ProgressBar from "../components/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { addFeature, removeFeature } from "../store/featureSlice";
import { useNavigate } from "react-router-dom";

function FeatureSelection() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedFeatures = useSelector((state) => state.features.selectedFeatures);

  // Fetch all categories (with nested features)
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleFeatureSelect = (feature) => {
    if (selectedFeatures.find((f) => f.id === feature.id)) {
      dispatch(removeFeature(feature.id));
    } else {
      dispatch(addFeature(feature));
    }
  };

  // Get features of currently selected category
  const currentCategory =
    categories.find((cat) => cat.id === selectedCategory) || {};

  const progress = Math.round((selectedFeatures.length / 50) * 100);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <CategorySidebar
        categories={categories}
        selectedId={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
        <ProgressBar progress={progress} />
        <h2 className="text-2xl font-semibold mb-4">
          Select Features for Your App
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategory.features?.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              onSelect={handleFeatureSelect}
              selected={selectedFeatures.some((f) => f.id === feature.id)}
            />
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => navigate("/summary")}
            className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeatureSelection;
