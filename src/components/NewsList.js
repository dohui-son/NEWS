import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 6rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 4rem;
  @media screen and(max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    //margin-top:2rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=10d42cc40f96409bb613b2b1cdccb5bc`,);
  }, [category]);
  if (loading) { return <NewsListBlock> waiting ... </NewsListBlock>; }
  if (!response) { return null; }
  if (error) { return <NewsListBlock> ERROR OCCURED !!! </NewsListBlock>; }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;