export default function List({ title, itemCount }) {
  return (
    <>
      <a className="w-52 mr-4 px-5 py-3 border rounded hover:shadow-md bg-white transition duration-200">
        {/* TITLE */}
        <h1 className="text-center mb-0 font-medium">{title}</h1>
        {/* ITEM COUNT */}
        <p className="text-center mt-0 italic text-sm text-gray-600">
          {itemCount} Items
        </p>
      </a>
    </>
  );
}
