import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
import Headline from "./Headline"
import newsData from "../mockNewsData.json"
import Header from "./Header";
import Footer from "./Footer";

const HeadlinesContent = () => {
    console.log("newsData = ", newsData)
    const [listData, setListData] = useState([newsData.response.results][0]);
    const navigate = useNavigate();
    return (
        <div>
            {listData.map((item, i) => {
                return (
                    <div
                        onClick={() => {
                            navigate(`/detail/${i}`);
                        }}
                        style={{
                            marginBottom: 20,
                            cursor: "pointer",
                        }}
                        key={i}
                        className="newsItem"
                    >
                        <Image headline={item.fields.headline} src={item.fields.thumbnail} />
                        <Headline headline={item.fields.headline} />
                    </div>
                );
            })}
        </div>);
}
export default HeadlinesContent;

