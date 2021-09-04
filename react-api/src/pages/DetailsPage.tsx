import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Article } from '../types';
import axiosInstance from '../services/api';

const API_KEY = '8c4af3f5923644749daf7fb16b4ea169';

export function Details(): JSX.Element {
  const location = useLocation();
  const url = location.pathname;
  const [detail, setDetail] = useState<Article>({} as Article);
  useEffect(() => {
    axiosInstance.get(`v2/everything?qInTitle=${url.slice(9)}&apiKey=${API_KEY}`).then((res) => {
      setDetail(res.data.articles[0]);
    });
  }, []);

  return (
    <div className="post__wrap">
      <h2>{detail.title}</h2>
      <img src={detail.urlToImage} alt={detail.title} />
      <p>{detail.description}</p>
      <p>{detail.author}</p>
      <p>{detail.publishedAt}</p>
    </div>
  );
}
