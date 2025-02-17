export default function Feedback(){
    return(
        <>

{/* Feedback Corner Section */}
<section className="p-10 bg-green-200">
  <h2 className="text-4xl font-bold text-center text-green-800 mb-6">Feedback Corner</h2>
  <div className="max-w-3xl mx-auto">
    {/* Feedback 1 */}
    <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-bold text-green-800 mt-4">-kiran</h3>
      <p className="text-green-700 ">“The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!”</p>
      
    </div>
    
    {/* Feedback 2 */}
    <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-bold text-green-800 mt-4">- Tayyiba</h3>
      <p className="text-green-700 ">“I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!”</p>
      
    </div>
    
    {/* Feedback 3 */}
    <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-bold text-green-800 mt-4">-Maham</h3>
      <p className="text-green-700">“I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!”</p>
      
    </div>
  </div>
</section>

</>
    )
}