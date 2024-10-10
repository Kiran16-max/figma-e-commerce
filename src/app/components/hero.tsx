// // src/app/HeroSection.tsx
'use client'
export default function HeroSection() {
    return (
      <div className="bg-green-200 py-16 h-1728 w-1117">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-green-800 mb-4">
              Discover and Find Your Own Fashion!
            </h1>
            <p className="text-green-600 mb-6">
              Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
            </p>
            <button className="bg-green-800 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition duration-300">
              EXPLORE NOW
            </button>
          </div>
  
          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/images/girl.jpg" // Replace with your actual image path
              alt="Fashion Model"
              className="rounded-lg shadow-lg w-full height-80 object-cover"
            />
          </div>
        </div>
      </div>
    );
  }