import { useState } from "react";
import AuthService from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../utils/queries";
import { CREATE_LIST } from "../utils/mutations";
import List from "../components/list";
import Store from "../components/store";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // GET USER
  const user = AuthService.getProfile();
  const userId = user ? user._id : null;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId },
  });

  const { fName, lName, lists, savedStores } = data.user;

  // CREATE LIST
  const [createList] = useMutation(CREATE_LIST);

  const handleNewListClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCreateList = async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;

    try {
      const { data } = await createList({
        variables: { title },
        refetchQueries: [{ query: GET_USER, variables: { userId } }],
      });

      // You can handle the data returned from the mutation here if needed
      console.log("Created list:", data.createList);
    } catch (error) {
      console.error("Error creating list:", error);
    }

    setShowPopup(false); // Close the popup after creating the list
  };

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-10">
        <div className="flex flex-col justify-center items-center">
          {/* INTRODUCTION */}
          <h1 className="text-2xl text-center">
            Hello, {fName} {lName}!
          </h1>
          <p className="md:w-1/2 w-7/8 mt-4 text-center">
            Simplify your holiday wishlist by effortlessly compiling & sharing
            desired items from various websites. Make gift shopping a breeze for
            friends & family!
          </p>
        </div>

        <div className="border rounded p-8 mt-4">
          <div className="flex align-center">
            <h2 className="text-xl">My Lists</h2>
            <button
              className="italic px-2 ms-2 text-sm rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200"
              onClick={handleNewListClick}
            >
              New List
            </button>
            <button className="italic px-2 text-sm ms-2 rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200">
              Delete List(s)
            </button>
          </div>
          {/* LIST ITEMS */}
          <ul className="flex mt-2 mb-6">
            {lists.map((list) => (
              <li key={list._id}>
                <List
                  title={list.title}
                  itemCount={list.listItems.length}
                  listId={list._id}
                />
              </li>
            ))}
          </ul>
          <div className="flex">
            <h2 className="text-xl">My Stores</h2>
            <button className="italic px-2 text-sm ms-2 rounded hover:bg-green-700 hover:text-white transition ease-in-out duration-200">
              Unsave Stores
            </button>
          </div>
          {/* SAVED STORES */}
          <ul className="flex">
            {savedStores.map((store) => (
              <li key={store._id}>
                <Store img={store.image} url={store.url} name={store.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
          <div className="border w-fit bg-white p-8 shadow-lg rounded">
            <div className="flex flex-col justify-center items-center px-12 py-4">
              <form onSubmit={handleCreateList}>
                <label
                  htmlFor="title"
                  className="block text-lg text-black font-medium"
                >
                  List Title
                </label>
                <input
                  name="title"
                  type="text"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
                  placeholder=""
                  required
                />
                <div className="flex justify-center mt-3">
                  <button
                    type="submit"
                    className="bg-green-700 mr-2 px-2 py-1 rounded text-white font-medium hover:text-gray-200 hover:shadow-md duration-200"
                  >
                    Create List
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="bg-red-600 px-2 py-1 rounded text-white font-medium hover:text-gray-200 hover:shadow-md duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// DELETE LIST
// UNSAVE STORE
