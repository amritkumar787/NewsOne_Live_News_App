// Imports
import React, { useEffect,useState } from 'react';
import NewItem from './NewItem.js';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import newsImage from '../Assets/newsImage.jpg';

// Class Based Component:
export function News(props){
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResults,setResults] = useState(0);

  const updateNews = async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    // using fetch api:
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  //lifecycle method
  useEffect(()=>{
    updateNews();
    //eslint-disable-next-line
  },[])

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchMore= async ()=>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`;

    // using fetch api:
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setResults(parseData.totalResults);

  };
    return (
        <div className="container my-3" >
            <h1 className='text-center' style={{marginTop:'90px'}}>NewsOne - Top {capitalizeFirstLetter(props.category)} Headlines </h1>

            {loading && <Spinner/>} {/*if loading is true then spinner component works otherwise not*/}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMore}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            >
            <div className="row mx-3 my-3">
              {articles.map((element)=>{ // for loop for array in js
                  return <div className="col-md-4" key={element.url}>
                            <NewItem title = {element.title?element.title:"News title not available - NewsOne"} description={element.description?element.description:"To read more about the news click on the read more button below:"} imageUrl={element.urlToImage?element.urlToImage:newsImage} url={element.url?element.url:"https://timesofindia.indiatimes.com/"} source={element.source.name?element.source.name:"unknown"} author={element.author} publishedAt={element.publishedAt}/>
                          </div>
              })}

            </div>
            </InfiniteScroll>
        </div>
    )
}
 News.defaultProps = {
  country : 'in',
  pageSize: 8,
  category: 'general',
}
News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News;