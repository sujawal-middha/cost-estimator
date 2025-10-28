function FeatureCard({ feature, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(feature)}
      className={`border rounded-xl p-4 cursor-pointer transition shadow-sm hover:shadow-md ${
        selected ? "border-primary bg-blue-50" : "border-gray-200"
      }`}
    >
      <h4 className="text-lg font-medium">{feature.name}</h4>
    </div>
  );
}

export default FeatureCard;
