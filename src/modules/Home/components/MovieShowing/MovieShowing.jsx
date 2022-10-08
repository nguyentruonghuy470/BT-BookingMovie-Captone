import { useNavigate } from "react-router-dom";
import { Card, Text, Badge, Button, Group, Container } from "@mantine/core";

import Slider from "react-slick";

import "../MovieShowing/css/styleMovieShowing.css";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
const MovieShowing = () => {
  // useNavigate là một hook dùng để điều hướng url
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());
  console.log(movies);
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="movieShowing">
        <Slider {...settings}>
          {movies?.map((movie) => {
            return (
              <Card
                key={movie.maPhim}
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                // className="p-0 mt-2 mb-4"
              >
                <div className="cardImg">
                  <img src={movie.hinhAnh} />
                </div>

                <Group
                  position="apart"
                  mt="md"
                  mb="xs"
                  className="justify-content-start gap"
                >
                  <Badge color="pink" variant="light" className="ms-1">
                    <Text weight={800} size={13}>
                      {movie.maNhom}
                    </Text>
                  </Badge>
                  <Text weight={800} size={14}>
                    {movie.tenPhim}
                  </Text>
                </Group>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => goToMovie(movie.maPhim)}
                >
                  BOOK TICKET
                </Button>
              </Card>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default MovieShowing;
