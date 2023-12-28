import React from "react";

const BookTable = ({books,onDelete,onEdit}) => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-white">
        <thead class="text-xs uppercase bg-gray-700 text-white font-bold">
          <tr>
            <th scope="col" class="px-6 py-3">
              Judul
            </th>
            <th scope="col" class="px-6 py-3">
              Pengarang
            </th>
            <th scope="col" class="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
        {books.map((book) => (
          <tr class="border-gray-700  bg-gray-800">
            <th key={book.id}
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
            {book.judul}
            </th>
            <td class="px-6 py-4">{book.pengarang}</td>
            <td class="px-6 py-4">
              <button
                onClick={() => onEdit(book.id)}
                type="button"
                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Ubah
              </button>
              <button
                onClick={() => onDelete(book.id)}
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Hapus
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
