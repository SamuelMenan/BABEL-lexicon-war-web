export default function Bestsellers() {
  const products = [
    {
      name: "Rich Chocolate Truffle Cake",
      price: "₹500",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Choco Chip Truffle Cake",
      price: "₹509",
      image:
        "https://images.unsplash.com/photo-1590080877777-6b7361c5c412?auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Tropical Fruit N Almond Cake",
      price: "₹509",
      image:
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Rich Butterscotch Crunch Cake",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#5a2d2d] font-bold text-2xl mb-6">
          Bestsellers from Across the Country
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 relative hover:shadow-md transition"
            >
              <span className="absolute top-3 left-3 text-red-500 text-sm">❤️</span>
              <div className="flex justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h3 className="text-[#5a2d2d] font-semibold mb-1 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-[#b23a2b] font-bold mb-2">{product.price}</p>
              <div className="flex items-center text-yellow-400 text-xs mb-3">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-gray-400 ml-2">(500)</span>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#b23a2b] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-[#b23a2b] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#922f23] transition">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}