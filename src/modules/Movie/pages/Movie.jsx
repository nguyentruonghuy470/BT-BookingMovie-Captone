import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mantine/core";

import Overview from "../components/Overview";
import Showtimes from "../components/Showtimes";

const Movie = () => {
  // useParams là hook để lấy giá trị params trên url
  const { movieId } = useParams();

  return (
    <>
      <div className="overView" style={{ backgroundColor: "#0f2029", padding: "30px" }}>
        <Overview movieId={movieId} />
      </div>
      <div className="col-12 py-5" id="movieTheater">
        <Showtimes movieId={movieId} />
      </div>
    </>
  );
};

export default Movie;
