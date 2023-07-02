import { useState, useEffect } from "react";
import imgplaceholder from "../assets/img-placeholder.svg";


function getArticles() {

  
  const onImageError = (e) => {
    e.target.src = imgplaceholder
  };

  useEffect(() => {

   
    }, [props.categos, page]);
    useEffect(() => {
      setPage(props.pageNum);
      console.log(page)
    }, [props.pageNum]);
    


}

export default getArticles;

const

  [maxPages, setMaxPages] = useState(1);



useEffect(() => {

  var link = 'https://newsapi.org/v2/everything?q=',
    api_key_1 = "78f0aa6465454f1eb935a2c6c7541917",
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


    })

