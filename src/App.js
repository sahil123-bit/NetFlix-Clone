import './Style/App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner'

function App() {
  return (
    <div className="app">
      {/* Navbar =>Netflix logo && avatar logo */}

      {/* Banner => You will se random images of movies*/}
      <Banner />

      {/* Rows  */}
      <Row title="NETFLIX ORIGINALS" fetchUrl ={request.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl ={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl ={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl ={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl ={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl ={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl ={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl ={request.fetchDocumentries} />

    </div>
  );
}

export default App;
