import React from 'react'; 

const ProductCategories = () => {
  const products = [
    {
      id: 1,
      name: "Mobile Stand",
      price: "$49.99",
      image: "/images/electronics.jpg",
    },
    {
      id: 2,
      name: "Beauty & wellness",
      price: "$59.99",
      image: "/images/meke.jpg",
    },
    {
      id: 3,
      name: "Accessories",
      price: "$79.99",
      image: "/images/purse.jpg",
    },
    {
      id: 4,
      name: "Toys & Games",
      price: "$89.99",
      image: "/images/toys.jpg",
    },
    {
      id: 5,
      name: "Home Decor",
      price: "$39.99",
      image: "/images/decor.jpg",
    },
    {
      id: 6,
      name: "Mobile",
      price: "$69.99",
      image: "/images/mobile.jpg",
    },
  ];

  return (
    <section className="p-10 bg-green-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-lg text-green-900">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button
              className="mt-2 bg-green-800 text-white py-1 px-3 rounded hover:bg-green-700"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
