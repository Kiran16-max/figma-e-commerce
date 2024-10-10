export default function Product() {
  return (
    <>

      <section className="p-10 bg-green-200" >
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-green-800">Clothing</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-green-800">Accessories</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-green-800">New Arrivals</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-green-800">Home Decor</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-green-800">Beauty & wellness</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center hover:bg-green-100 transition">
            <h3 className="text-lg font-semibold text-green-800">Electronics</h3>
          </div>
          </div>
      </section>
      </>
      );
};