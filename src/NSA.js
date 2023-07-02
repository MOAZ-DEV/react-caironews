const
  geo = [],
  api_key = "78f0aa6465454f1eb935a2c6c7541917";
export const
  everything = function (keywords) {
    fetch('https://newsapi.org/v2/everything?q=' + keywords + '&language=en' + '&apiKey=' + api_key + '&pageSize=20')
      .then((response) => response.json())
      .then((data) => {
        data.articles.forEach((e, index) => {
          e.index = index + (3);
        });
        console.log(data.articles);
        return data.articles;
      })
  };

export const topHeadLines =
  (country, category, language, page, pageSize, apiKey) => {
    
    category = category || "general";
    language = language || geo[0].localityLanguageRequested;
    page = page || 1;
    pageSize = pageSize || 20;
    apiKey = api_key;


    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
        return data;
      })

  };








// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
/**
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);

});
// To query sources
// All options are optional

newsapi.v2.sources({
  category: 'technology',
  language: 'en'
}).then(response => {
  res.push(response);

    {
      status: "ok",
      sources: [...]
    }

});
 */


