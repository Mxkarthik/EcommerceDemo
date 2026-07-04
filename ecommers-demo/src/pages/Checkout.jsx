import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const inputClass =
  "w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

export default function Checkout() {
  const { cart, total } = useCart();
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
  };

  if (cart.length === 0 && !placed) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Nothing to checkout
            </h2>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (placed) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow text-center max-w-md">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
              Order Placed!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Thank you for your purchase. Your order is being processed.
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 space-y-6">

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input required className={inputClass} placeholder="John" />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input required className={inputClass} placeholder="Doe" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Email</label>
                    <input required type="email" className={inputClass} placeholder="john@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Address</label>
                    <input required className={inputClass} placeholder="123 Main Street" />
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input required className={inputClass} placeholder="New York" />
                  </div>
                  <div>
                    <label className={labelClass}>ZIP Code</label>
                    <input required className={inputClass} placeholder="10001" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Payment Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Card Number</label>
                    <input required className={inputClass} placeholder="1234 5678 9012 3456" maxLength={19} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Expiry Date</label>
                      <input required className={inputClass} placeholder="MM/YY" maxLength={5} />
                    </div>
                    <div>
                      <label className={labelClass}>CVV</label>
                      <input required className={inputClass} placeholder="123" maxLength={3} />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition"
              >
                Place Order · ${total.toFixed(2)}
              </button>

            </form>

            {/* Order Summary */}
            <div className="lg:w-80">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="truncate mr-2">{item.name} × {item.quantity}</span>
                      <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex justify-between font-bold text-gray-800 dark:text-white text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
