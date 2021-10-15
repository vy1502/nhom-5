import { useParams } from "react-router-dom";
import { Option } from "../Home/option";
import {Link} from "react-router-dom";
import { dataFake } from "../const";

import "./Book.css";
export default function Book() {

  return (
    <div className="container__book">
        <Option />
        <div className="card">
          {dataFake.map((item) => (
            <Link to={`/details/${item.id}`} key={item.id}>
              <div className="card__item">
                <div className="card__img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card__info">
                  <h2>{item.title}</h2>
                  <h3>Mã sách: {item.code}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}
