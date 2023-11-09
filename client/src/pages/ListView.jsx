export default function ListView() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-10 flex space-x-12">
        <div className="w-3/12">
          <h2 className="text-transparent text-xl">.</h2>
          <div className="border-b border-gray-300 my-4"></div>
          <div className="w-full">
            {/* NAME */}
            <label htmlFor="itemName" className="block text-lg text-black">
              Description
            </label>
            <input
              name="itemName"
              type="text"
              placeholder=""
              className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
            />
            <div className="flex my-2">
              {/* PRICE */}
              <div className="me-3 w-2/5">
                <label htmlFor="itemName" className="block text-lg text-black">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-secondary">
                    $
                  </span>
                  <input
                    name="itemName"
                    type="text"
                    placeholder=""
                    className="w-full pl-6 px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
                  />
                </div>
              </div>
              {/* SIZE */}
              <div className="w-3/5">
                <label htmlFor="itemSize" className="block text-lg text-black">
                  Size
                </label>
                <select
                  name="itemSize"
                  className="w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
                >
                  <option value="-">-</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="2XL">2XL</option>
                  <option value="-">-</option>
                  {Array.from({ length: 19 }, (_, i) => i * 0.5 + 4).map(
                    (size) => (
                      <option key={size} value={size}>
                        U.S. Men's {size}
                      </option>
                    )
                  )}
                  <option value="-">-</option>
                  {Array.from({ length: 19 }, (_, i) => i * 0.5 + 4).map(
                    (size) => (
                      <option key={size} value={size}>
                        U.S. Women's {size}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            {/* URL */}
            <label htmlFor="itemName" className="block text-lg text-black">
              URL
            </label>
            <input
              name="itemName"
              type="text"
              placeholder=""
              className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-red-600 px-12 py-2 rounded text-white font-medium hover:text-gray-200 hover:shadow-md duration-200">
              Add New Item
            </button>
          </div>
        </div>
        <div className="w-9/12">
          <h2 className="text-xl font-medium">Wishlist Items</h2>
          <div className="border-b border-gray-300 my-4"></div>
          {/* ITEMS CONTAINER */}
          <div className="flex flex-wrap"></div>
        </div>
      </div>
    </>
  );
}
