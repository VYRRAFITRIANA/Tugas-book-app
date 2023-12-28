import React from "react";
import BookTable from "../components/BookTable";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

  const Home = ({books,setBooks}) => {
  const navigate = useNavigate()
 
  const ButtonAdd =()=>{
    navigate("/tambah-buku")
  }
  

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleUbah = (id) => {
    navigate(`/edit-buku/${id}`);
  }
  
  

  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">List Buku</p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={ButtonAdd}
        >
          Tambah Buku
        </button>
      </div>
    

     
      <BookTable books={books} onDelete = {handleDelete} onEdit = {handleUbah} />
  
    </Layout>
  );
};

export default Home;
