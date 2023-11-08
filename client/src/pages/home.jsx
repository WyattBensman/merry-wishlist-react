export default function Home() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-center">Hello, Wyatt Bensman!</h1>
          <p className="md:w-1/2 w-7/8 mt-4 text-center">
            Simplify your holiday wishlist by effortlessly compiling & sharing
            desired items from various websites. Make gift shopping a breeze for
            friends & family!
          </p>
        </div>

        <div className="border rounded p-8 mt-4">
          <div className="flex align-center">
            <h2 className="text-xl">My Lists</h2>
            <button className="italic px-2 ms-2 text-sm rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200">
              New List
            </button>
            <button className="italic px-2 text-sm ms-2 rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200">
              Edit Lists
            </button>
            <button className="italic px-2 text-sm ms-2 rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200">
              Archived Lists
            </button>
          </div>
          {/* LIST ITEMS */}
          <div className="flex mt-2 mb-6"></div>
          <div className="flex">
            <h2 className="text-xl">My Stores</h2>
            <button className="italic px-2 text-sm ms-2 rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200">
              Unsave Stores
            </button>
          </div>
          {/* SAVED STORES */}
          <div className="flex mt-2"></div>
        </div>
      </div>
    </>
  );
}
