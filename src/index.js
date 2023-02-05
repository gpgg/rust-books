import React, { Fragment } from "react";
import ReactDom from "react-dom/client";
import BookList from "./BookList";
import { beginnerBooks, intermediateBooks } from "./books";
import "./index.css";

const App = () => {
  return (
    <>
      <h1 className="title">Rust Books</h1>
      <BookList title="beginner books" books={beginnerBooks}></BookList>
      <BookList title="intermediate books" books={intermediateBooks}></BookList>
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
