export default function ArvhivedListView() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-10 flex space-x-12">
        <div className="w-3/12">
          <h2 className="text-xl font-medium italic text-red-500">
            Archived List
          </h2>
          <div className="border-b border-gray-300 my-4"></div>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:shadow-lg duration-200">
            Unarchived List
          </button>
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
