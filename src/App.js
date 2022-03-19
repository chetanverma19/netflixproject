import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from "./Banner";
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      {/* {Navbar} */}
      <Nav />
      <Banner fetchURL={requests.fetchTrending}/>
      {/* <h1>Bubbleflix</h1> */}
      <Row 
        title="TRENDING NOW"
        fetchURL={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Bubbleflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Originals" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
