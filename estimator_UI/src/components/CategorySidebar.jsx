function CategorySidebar({ categories, selectedId, onSelect }) {
  return (
    <aside className="w-full md:w-64 bg-white shadow-sm rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4">Feature Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`cursor-pointer p-2 rounded-md transition ${
              selectedId === cat.id ? "bg-primary text-white" : "hover:bg-blue-50"
            }`}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategorySidebar;
