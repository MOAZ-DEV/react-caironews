import { useState, useEffect } from "react";
import "../scss/HotNewsBannersComponent.scss";
import imgplaceholder from "../assets/img-placeholder.svg";

function HotNewsBannersComponent(props) {
    const
        [articles, setArticles] = useState([]),
        [page, setPage] = useState(1),
        [maxPages, setMaxPages] = useState(1);

    const onImageError = (e) => {
        e.target.src = imgplaceholder
    }
    
    useEffect(() => {
        
        var link = 'https://newsapi.org/v2/everything?q=',
        api_key = "78f0aa6465454f1eb935a2c6c7541917",
        api_key_2 = "7bb925a297924e1d8197d89f65054ed6",
        api_key_3 = "3ae0da6375b745bb8f08f6e358df2fd9",
        keywords = [],
        list = Array;
        
        for (let c = 0; c < props.categos.length; c++) {
            
            (!props.categos[c].state) ? "" : keywords.push(...props.categos[c].keywords);
            
            
        }
        console.log(keywords.join(" OR ") + ' OR مصر OR القاهره OR اليوم');
        
        fetch(link + keywords.join(" OR ") + '&language=ar' + '&apiKey=' + api_key_2 + '&pageSize=8&page=' + (page))
        .then((response) => response.json())
        .then((data) => {
            for (let a = 0; a < data.articles.length; a++) {
                data.articles[a].id = a;
            }
            console.log(data);
            setMaxPages(data.totalResults / (data.articles.length + 1))
            !(page > 1)? setArticles(data.articles):
            setArticles([...articles, ...data.articles]);
            
        })
        
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