import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <img
               src={product.image}
               alt={product.name}
               className="w-full h-52 object-cover"
            />
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {product.name}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                    ${product.price}
                </p>
                <button
                    onClick={() => addToCart(product)}
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-lg transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
