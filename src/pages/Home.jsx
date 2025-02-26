import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import { BASE_URL, API_KEY } from '../config';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={`${BASE_URL}/trending/all/week?api_key=${API_KEY}`} />
      <Row title="Top Rated" fetchUrl={`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`} />
      <Row title="Action Movies" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`} />
      <Row title="Comedy Movies" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`} />
      <Row title="Horror Movies" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`} />
      <Row title="Romance Movies" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`} />
      <Row title="Documentaries" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`} />
    </div>
  );
};

export default Home;
