import { useState, useEffect } from "react";
import Axios, * as others from 'axios';

import "../scss/NewsSection.scss";
import imgplaceholder from "../assets/img-placeholder.svg";

function NewsSection(props) {
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
       
        const
            Host = 'https://api.currentsapi.services/v1/latest-news?',
            ApiKey = {
                X: "mCSBbece4oIAc-0F1BcxtU4Exone9DZtop-uMpNdB6RVz1tv",
            }
        Axios
            .get(
                `${Host}&country=EG&apiKey=${ApiKey.X}&page_size=8&page_number=${page}`
            )
            .then(response => {
                console.log(response.data);
                !(page > 1) ? setArticles(response.data.news) :
                    setArticles([...articles, ...response.data.news]);
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
                                    <span className="sub">{artic.author + " | " + artic.published.substring(0, 10)}</span>
                                    <span className="title">{artic.title}<br /><br />
                                    </span>
                                </div>
                                <img src={artic.image || imgplaceholder}
                                    fetchpriority="high" onError={onImageError} alt={artic.title} />
                            </a>
                        </div>)

                    })}

                </div>
            </div>
        </>
    )
}
export default NewsSection;

/*
 var keywords = [];
        for (let c = 0; c < props.categos.length; c++) {
            (!props.categos[c].state) ? "" :
                keywords.push(...keywords, ...props.categos[c].keywords);
        }
        console.log(keywords.join(" OR ") + ' OR مصر OR القاهره OR اليوم');


*/