import { useMutation } from "@apollo/client";
import { DELETE_ITEM } from "../utils/mutations";

export default function Item({ itemName, itemPrice, itemSize, itemUrl }) {
  const [deleteItem] = useMutation(DELETE_ITEM);

  const handleDeleteItem = async () => {
    try {
      await deleteItem({
        variables: { listId, itemId },
      });
      console.log("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="md:w-72 w-full mr-3 border rounded relative">
      <button
        className="absolute top-1 right-2 text-gray-300 hover:text-red-600 duration-200"
        onClick={handleDeleteItem}
      >
        X
      </button>
      <div className="flex m-3 items-center">
        {/* IMAGE */}
        <img src="./images/nike.jpeg" className="w-20 h-20 border" />
        {/* TITLE */}
        <h1 className="ms-3 font-medium">{itemName}</h1>
      </div>
      <div className="flex justify-center mb-2">
        <div className="border-b border-gray-300 w-3/4"></div>
      </div>
      <div className="flex">
        {/* PRICE */}
        <p className="w-1/2 text-center">${itemPrice}</p>
        {/* SIZE */}
        <p className="w-1/2 text-center">{itemSize}</p>
      </div>
      <div className="flex mb-3 justify-center">
        {/* LINK */}
        <a
          src={itemUrl}
          className="w-3/4 mt-2 py-1 px-2 border border-green-700 rounded hover:bg-green-700 hover:text-white duration-200"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
