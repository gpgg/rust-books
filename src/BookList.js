import Book from "./Book";

const BookList = ({ books, title }) => {
  return (
    <section>
      <h1 className="booklist-title">{title}</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index}></Book>;
        })}
      </section>
    </section>
  );
};

export default BookList;
