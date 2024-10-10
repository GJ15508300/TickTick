const SearchModal = ({ openSearchModal, setOpenSearchModal }) => {
  return (
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="modalBackdrop"
    >
      <div class="bg-white rounded-lg p-6 w-1/3 shadow-lg">
        <h2 class="text-lg font-semibold mb-4">Modal Title</h2>
        <p class="mb-4">
          This is the content of the modal. You can place any text or components
          here.
        </p>
        <div class="flex justify-end">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              setOpenSearchModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
