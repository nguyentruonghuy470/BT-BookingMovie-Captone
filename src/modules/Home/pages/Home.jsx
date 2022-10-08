import Banner from "../components/Banner";
import BookTicket from "../components/BookTicket";
import MovieCinema from "../components/Cinema/MovieCinema";
import MovieShowing from "../components/MovieShowing";
import New from "../components/News/New";
const Home = () => {
  return (
    <div>
      <Banner />
      <BookTicket/>
      <MovieShowing />  
      <MovieCinema/>
      <New/>
    </div>
  );
};

export default Home;
