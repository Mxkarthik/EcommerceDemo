import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Explore Our Products
          </h1>

          <p className="mt-4 text-lg">
            Find premium electronics at the best prices.
          </p>

        </div>

      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold">
            All Products
          </h2>

          <select className="border rounded-lg px-4 py-2">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}