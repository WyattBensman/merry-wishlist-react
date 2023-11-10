import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ITEM } from "../utils/mutations";
import { GET_LIST } from "../utils/queries";

export default function ListView({ title, listId }) {
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    itemSize: "",
    itemUrl: "",
  });

  // GET LIST
  const { loading, error, data } = useQuery(GET_LIST, {
    variables: { listId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching list data</div>;

  const list = data.list;
  const listItems = list.listItems;

  // CREATE ITEM
  const [createItem] = useMutation(CREATE_ITEM);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching list data</div>;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createItem({
        variables: { ...formData, listId },
        refetchQueries: [{ query: GET_LIST, variables: { listId } }],
      });

      console.log("New item added:", data.createItem);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-10 flex space-x-12">
        <div className="w-3/12">
          <h2 className="text-transparent text-xl">.</h2>
          <div className="border-b border-gray-300 my-4"></div>
          {/* START OF FORM */}
          <form className="w-full" onSubmit={handleSubmit}>
            {/* NAME */}
            <label htmlFor="itemName" className="block text-lg text-black">
              Description
            </label>
            <input
              name="itemName"
              type="text"
              placeholder=""
              className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
              onChange={handleInputChange}
            />
            <div className="flex my-2">
              {/* PRICE */}
              <div className="me-3 w-2/5">
                <label htmlFor="itemPrice" className="block text-lg text-black">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-secondary">
                    $
                  </span>
                  <input
                    name="itemPrice"
                    type="text"
                    placeholder=""
                    className="w-full pl-6 px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
                    onChange={handleInputChange}
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
            <label htmlFor="itemUrl" className="block text-lg text-black">
              URL
            </label>
            <input
              name="itemUrl"
              type="text"
              placeholder=""
              className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none"
              onChange={handleInputChange}
            />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-red-600 px-12 py-2 rounded text-white font-medium hover:text-gray-200 hover:shadow-md duration-200"
              >
                Add New Item
              </button>
            </div>
          </form>
        </div>
        <div className="w-9/12">
          <h2 className="text-xl font-medium">{title} Items</h2>
          <div className="border-b border-gray-300 my-4"></div>
          {/* ITEMS CONTAINER */}
          <div className="flex flex-wrap">
            {listItems.map((item) => (
              <Item
                key={item._id}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemSize={item.itemSize}
                itemUrl={item.itemUrl}
                itemId={item._id}
                listId={listId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
