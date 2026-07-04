export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-blue-600 font-medium">
          {product.category}
        </span>

        <h3 className="text-xl font-bold mt-2">
          {product.name}
        </h3>

        <p className="text-2xl font-bold mt-3 text-gray-900">
          ${product.price}
        </p>

        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
}