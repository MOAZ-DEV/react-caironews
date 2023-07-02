import { useState, useEffect } from "react";
import Axios, * as others from 'axios';

import "../scss/HotNewsBannersComponent.scss";
import imgplaceholder from "../assets/img-placeholder.svg";

function HotNewsBannersComponent(props) {
    const [statue, setStatue] = useState({
        articles: [],
        isLoading: true,
        errors: null
    });
    const [articles, setArticles] = useState([]),
        [page, setPage] = useState(1);
    const onImageError = (e) => {
        e.target.src = imgplaceholder
    };

    useEffect(() => {
        var keywords = [];
        for (let c = 0; c < props.categos.length; c++) {
            (!props.categos[c].state) ? "" :
                keywords.push(...keywords, ...props.categos[c].keywords);
        }
        console.log(keywords.join(" OR ") + ' OR مصر OR القاهره OR اليوم');

        const
            Host = 'https://newsapi.org/v2/everything?q=',
            ApiKey = {
                X: "78f0aa6465454f1eb935a2c6c7541917",
                Y: "7bb925a297924e1d8197d89f65054ed6",
                Z: "3ae0da6375b745bb8f08f6e358df2fd9"
            }
        console.log(`${Host + keywords.join(" OR ")}&language=ar&apiKey=${ApiKey.X}&pageSize=8&page=${page}`)
        Axios
            .get(
                `${Host + keywords.join(" OR ")}&language=ar&apiKey=${ApiKey.X}&pageSize=8&page=${page}`
            )
            .then(response => {
                for (let a = 0; a < response.data.articles.length; a++) {
                    response.data.articles[a].id = a;
                }
                console.log(response.data);
                !(page > 1) ? setArticles(response.data.articles) :
                    setArticles([...articles, ...response.data.articles]);
            }
            )
            .catch(error => setStatue({ error, isLoading: false }));


    }, [props.categos, page]);
    useEffect(() => {
        setPage(props.pageNum);
        console.log(page)
    }, [props.pageNum]);
    return (
        <>
            <div className="HotNewsBannersComponent">
                <span className="lable">مقترحات اخباريه</span>

                <div className="wrap">

                    {articles.map((artic) => {
                        return (<div className="item" key={artic.id} onClick={() => props.Overview(artic)}>
                            <a href={artic.url}>
                                <div className="wrap">
                                    <span className="sub">{artic.source.name + " | " + artic.publishedAt.substring(0, 10)}</span>
                                    <span className="title">{artic.title}<br /><br />
                                    </span>
                                </div>
                                <img src={artic.urlToImage || imgplaceholder}
                                    fetchpriority="high" onError={onImageError} alt={artic.title} />
                            </a>
                        </div>)

                    })}

                </div>
            </div>
        </>
    )
}
export default HotNewsBannersComponent;