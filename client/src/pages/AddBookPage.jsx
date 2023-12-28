import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from 'react-router-dom';

const AddBookPage = ({ books, setBooks }) => { 
  const navigate = useNavigate();

  const [judul, setjudul] = useState('');
  const [pengarang, setpengarang] = useState('');
 
  const handlerJudul = (event) =>{
      setjudul(event.target.value)
  }

  const handlerPengarang =(event) =>{
      setpengarang(event.target.value)  
  }
  const handlerSubmit=(event) => {
    event.preventDefault()

    if(judul ===""|| pengarang ===""){
     
      alert("Mohon isi form dengan lengkap !")
      setjudul('')
      setpengarang('')
      
  } else {
      const newBook = {
        id: books.length +1,
        judul: judul,
        pengarang: pengarang
      }
      setBooks([...books, newBook]);
      navigate('/');
    }
  }

  const handleCancel = () => {
    navigate('/');
  };
  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">
          Tambah Buku
        </p>
      </div>

      <form onSubmit={handlerSubmit}>
        <div class="mb-6"> 
          <label class="block mb-2 text-sm font-medium text-white">
            Judul Buku
          </label>
          <input
            type="text"
            class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={judul}
            onChange={handlerJudul}
          />
        </div>
        <div class="mb-6"> 
          <label class="block mb-2 text-sm font-medium text-white">
            Pengarang
          </label>
          <input
            type="text"
            class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            value={pengarang}
            onChange={handlerPengarang}
          />
        </div>
        <div class="flex items-start"></div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah
          </button>
          <button
            type="button"
            class="ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={handleCancel}
          >
            Batal
          </button>
        
      </form>
    </Layout>
  );
};

export default AddBookPage;
