import { useParams } from "react-router-dom";
import { Option } from "../Home/option";

import { dataFake } from "../const";

import "./Details.css";
export default function Details() {
  const { id } = useParams();
  const book = dataFake.find((book) => book.id === parseInt(id));
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
