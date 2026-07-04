import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {

    const { cart } = useCart();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (

        <nav className="bg-white shadow sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    Reviewly Store
                </Link>

                <div className="flex gap-8 items-center">

                    <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Home
                    </Link>

                    <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Products
                    </Link>

                    <Link
                        to="/cart"
                        className="relative text-2xl"
                        aria-label={`Cart with ${itemCount} items`}
                    >
                        🛒

                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full px-1">
                                {itemCount}
                            </span>
                        )}

                    </Link>

                </div>

            </div>

        </nav>

    );
}