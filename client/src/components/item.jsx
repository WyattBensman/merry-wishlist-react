export default function Item() {
  return (
    <div className="md:w-72 w-full mr-3 border rounded">
      <div className="flex m-3 items-center">
        {/* IMAGE */}
        <img src="./images/nike.jpeg" className="w-20 h-20 border" />
        {/* TITLE */}
        <h1 className="ms-3 font-medium">New Balance 9060</h1>
      </div>
      <div className="flex justify-center mb-2">
        <div className="border-b border-gray-300 w-3/4"></div>
      </div>
      <div className="flex">
        {/* PRICE */}
        <p className="w-1/2 text-center">$110</p>
        {/* SIZE */}
        <p className="w-1/2 text-center">10.5 M</p>
      </div>
      <div className="flex mb-3 justify-center">
        {/* LINK */}
        <button className="w-3/4 mt-2 py-1 px-2 border border-green-700 rounded hover:bg-green-700 hover:text-white duration-200">
          Visit Website
        </button>
      </div>
    </div>
  );
}
