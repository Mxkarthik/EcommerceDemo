import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

    const { addToCart } = useCart();

    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
               src={product.image}
               alt={product.name}
               className="w-full h-52 object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold">
                    {product.name}
                </h2>

                <p className="text-blue-600 font-semibold">
                    ${product.price}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                    Add to Cart
                </button>

            </div>

        </div>

    );
}