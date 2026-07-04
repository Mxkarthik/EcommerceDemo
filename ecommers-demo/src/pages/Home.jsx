import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import productsData from "../data/products";

// Use only the first 4 products from the shared data (so prices are numbers)
const featuredProducts = productsData.slice(0, 4);

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Summer Tech Sale
          </h1>

          <p className="text-xl mb-8 max-w-xl">
            Discover premium electronics with exclusive discounts.
          </p>

          <Link
            to="/products"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>

        </div>

      </section>

      {/* Featured */}

      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {featuredProducts.map(product => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {product.name}
                </h3>

                <p className="text-blue-600 font-semibold mt-2">
                  ${product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Offer */}

      <section className="bg-indigo-900 text-white py-20">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Up to 50% OFF
          </h2>

          <p className="mt-4 text-lg">
            Limited time offers on all accessories.
          </p>

        </div>

      </section>
      <Footer />

    </div>
  );
}