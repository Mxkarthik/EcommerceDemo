import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  const { cart, removeFromCart, removeAllFromCart, total, addToCart } = useCart();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Looks like you haven't added anything yet.
              </p>
              <Link
                to="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Cart Items */}
              <div className="flex-1 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 flex gap-4 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-gray-800 dark:text-white truncate">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        ${item.price} each
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold flex items-center justify-center transition"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="font-semibold text-gray-800 dark:text-white w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold flex items-center justify-center transition"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeAllFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 text-sm mt-2 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:w-80">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow sticky top-24">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="truncate mr-2">{item.name} × {item.quantity}</span>
                        <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex justify-between font-bold text-gray-800 dark:text-white text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="mt-6 block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-semibold transition"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    to="/products"
                    className="mt-3 block w-full text-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}
