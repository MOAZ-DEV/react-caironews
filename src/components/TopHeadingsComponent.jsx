import { useState, useEffect } from "react";
import "../scss/TopHeadingsWarapper.scss";

function TopHeadingsComponent(props) {
    const
        [articles, setArticles] = useState([]);

    useEffect(() => {

        var api_key_1 = "78f0aa6465454f1eb935a2c6c7541917",
            api_key_2 = "7bb925a297924e1d8197d89f65054ed6",
            api_key_3 = "3ae0da6375b745bb8f08f6e358df2fd9",

            category = "general",
            language = "AR";

        fetch(`https://newsapi.org/v2/top-headlines?country=${"EG"}&category=${category}&apiKey=${api_key_1}&pageSize=12`)
            .then((response) => response.json())
            .then((data) => {
                for (let a = 0; a < data.articles.length; a++) {
                    data.articles[a].id = a;
                }
                console.log(data);
                setArticles(data.articles);
            })
    }, [])
    return (
        <>
            <div className="TopHeadingsWarapper">
                <span className="lable">صدر مؤخراً</span>
                <div className="wrap">
                    {articles.map(artic => {
                        return (<div className="item" key={artic.id}>
                            {artic.urlToImage ? "" : () => {
                                return <img src={artic.urlToImage} alt="" />
                            }}
                            <span className="sub">{artic.publishedAt.substring(0, 10)}</span> <br />
                            <span className="title"><a href={artic.url}>
                                {artic.title}</a></span>
                        </div>)

                    })}
                </div>

            </div>
        </>
    )
}
export default TopHeadingsComponent;