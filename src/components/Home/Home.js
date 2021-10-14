import React from "react";
import { AiFillNotification } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import '../Home/Home.css';
import Header from "../Header/Header";

function Home() {

    return (
        <>
            <div className="app__container">
                <div className="gird wide" style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <Header />
                    <div className="infomation">
                        <div className="h2"><AiFillNotification /> THÔNG TIN - THÔNG BÁO <br /></div>
                        <TiTick /> Thay đổi giờ làm việc <br />
                        <TiTick /> Sau 14h00 ngày 06/10/2021, thư viện đóng cửa để dọn vệ sinh
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home;