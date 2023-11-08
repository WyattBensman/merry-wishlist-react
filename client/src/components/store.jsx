import { useState } from "react";

export default function Store() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    /* Change to be a hyperlink */
    <div
      className="mt-5 ms-5 w-36 border rounded flex justify-center items-center"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/* STORE IMAGE */}
      <img
        src="./images/nike.jpeg"
        className={`w-100 ${
          isHovered ? "transition duration-200 filter brightness-50" : ""
        }`}
      />
      {/* STORE TITLE */}
      {isHovered && (
        <div className="absolute text-white text-xl font-medium flex flex-col items-center">
          <h1 className="text-white hover:text-gray-300 transition-color duration-300 ease-in-out">
            Nike Store
          </h1>
        </div>
      )}
    </div>
  );
}
