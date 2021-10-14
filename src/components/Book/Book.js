import { useParams } from "react-router-dom";
import { Option } from "../Home/option";

import { dataFake } from "../const";

import "./Book.css";
export default function Book() {
  const { id } = useParams();
  const book = dataFake.find((book) => book.id === parseInt(id));
  console.log("book", book);
  return (
    <div className="container__book">
      <Option />
      <div className="details__book">
        <div className="details__img">
          <img src={book.img} alt={book.img} />
        </div>
        <div className="details__info">
          <h2>{book.title}</h2>
          <h3>Mã sách: {book.code}</h3>
        </div>
      </div>
    </div>
  );
}
