import React from "react";
import { Link } from "react-router-dom";

import { AiFillNotification } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

import { dataFake } from "../const/index";
import { Option } from "./option";

import "../Home/Home.css";
function Home() {
  return (
    <div className="app__container">
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
      <div className="infomation">
        <div className="h2">
          <AiFillNotification /> THÔNG TIN - THÔNG BÁO <br />
        </div>
        <TiTick /> Thay đổi giờ làm việc <br />
        <TiTick /> Sau 14h00 ngày 06/10/2021, thư viện đóng cửa để dọn vệ sinh
      </div>
    </div>
  );
}

export default Home;
