import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const { cart } = useCart();
    const { theme, toggleTheme } = useTheme();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow dark:shadow-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Reviewly Store
                </Link>

                <div className="flex gap-6 items-center">
                    <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">
                        Home
                    </Link>

                    <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">
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

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition text-lg"
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>
                </div>

            </div>
        </nav>
    );
}
