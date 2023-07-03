import { useState, useEffect } from "react";
import Axios, * as others from 'axios';
import "../scss/SideBarNews.scss";

function SideBarNews(props) {
    const [statue, setStatue] = useState({
        articles: [],
        isLoading: true,
        errors: null
    });
    const
        [articles, setArticles] = useState([]);

    useEffect(() => {
    
        const
            Host = 'https://api.currentsapi.services/v1/latest-news?',
            ApiKey = {
                X: "mCSBbece4oIAc-0F1BcxtU4Exone9DZtop-uMpNdB6RVz1tv",
            }
        Axios
            .get(
                `${Host}&country=EG&apiKey=${ApiKey.X}&page_size=8&page_number=1`
            )
            .then(response => {
                console.log(response.data);
                !(page > 1) ? setArticles(response.data.news) :
                    setArticles([...articles, ...response.data.news]);
            }
            )
            .catch(error => setStatue({ error, isLoading: false }));

    }, [])
    return (
        <>
            <div className="TopHeadingsWarapper">
                <span className="lable">صدر مؤخراً</span>
                <div className="wrap">
                    {articles.map(artic => {
                        return (<div className="item" key={artic.id}>
                            {artic.image ? "" : () => {
                                return <img src={artic.image} alt="" />
                            }}
                            <span className="sub">{artic.published.substring(0, 10)}</span> <br />
                            <span className="title"><a href={artic.url}>
                                {artic.title}</a></span>
                        </div>)

                    })}
                </div>

            </div>
        </>
    )
}
export default SideBarNews;