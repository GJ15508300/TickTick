import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchModal = ({ openSearchModal, setOpenSearchModal }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log("searchQuery", searchQuery);

  // Handle close modal
  const handleCloseModal = (e) => {
    setOpenSearchModal(false);
  };

  // Prevent modal close when clicking inside modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="modalBackdrop"
      onClick={handleCloseModal}
    >
      <div
        class="bg-white rounded-lg p-6 w-1/2 shadow-lg h-4/6"
        onClick={handleModalContentClick} // Stop event propagation
      >
        <div class="flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${`text-gray-600`} text-[1.3rem]`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <FontAwesomeIcon
            icon={faClose}
            className={`${`text-gray-600`} text-[1.3rem]`}
            onClick={handleCloseModal}
          />
        </div>

        <div class="flex justify-center items-center h-4/5">
          <p class="text-gray-500">Search tasks, tags, lists and filters</p>
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
