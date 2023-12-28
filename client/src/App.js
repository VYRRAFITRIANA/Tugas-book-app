import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from"./pages/EditBookPage";
import React, { useState } from "react";

function App() {
  
  const [books, setBooks] = useState([
    {
      id: 1,
      judul: "Harry Potter",
      pengarang: "J.K Rowling",
    },
    {
      id: 2,
      judul: "Critical Eleven",
      pengarang: "Ika Natassa",
    },
  ]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home books={books} setBooks={setBooks} />} />
          <Route path="/tambah-buku" exact element={<AddBookPage books={books} setBooks={setBooks} />} />
          <Route path="/edit-buku/:id" element={<EditBookPage books={books} setBooks={setBooks} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
