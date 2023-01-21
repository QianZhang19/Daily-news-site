import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../mockNewsData.json"
import Headline from "./Headline";
import Image from "./Image";
import Header from "./Header";
import Footer from "./Footer";
import Bodytext from "./Bodytext";

const Article = () => {
    const { id } = useParams();
    const item = newsData.response.results[id];

    return (
        <div>
            <Image title={item.fields.headline} src={item.fields.thumbnail} />
            <Headline title={item.fields.headline} />
            <Bodytext text={item.fields.bodyText} />
        </div>
    );
};

export default Article;
