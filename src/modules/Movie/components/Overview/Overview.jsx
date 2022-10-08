import React from "react";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Container, Grid, Text, Button } from "@mantine/core";

import "modules/Movie/pages/css/styleMovie.css";
const Overview = ({ movieId }) => {
  var moment = require("moment");

  const {
    data: movie,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieDetails(movieId));

  if (!movie) {
    return null;
  }

  return (
    <Container size="md" px="xs">
      <Grid grow>
        <Grid.Col span={4} className="movieImg">
          <img className="moviePic" src={movie.hinhAnh} alt={movie.tenPhim} />
        </Grid.Col>
        <Grid.Col span={5} style={{ position: "relative" }}>
          <div className="containerContext">
            <Text
              component="h4"
              color="#E9ECEF"
              size="lg"
              weight={700}
              style={{
                fontFamily: "Greycliff CF, sans-serif",
                marginBottom: "20px",
              }}
            >
              Ngày công chiếu: {moment(movie.ngayKhoiChieu).format("DD/MM/yyyy")}
            </Text>
            <Text
              component="h1"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              size="xl"
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif" }}
            >
              {movie.tenPhim}
            </Text>
            <Text
              component="p"
              color="#E9ECEF"
              size="lg"
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif" }}
            >
              Mô tả : {movie.moTa}
            </Text>
            <Text
              component="p"
              color="#E9ECEF"
              size="lg"
              weight={700}
              style={{ fontFamily: "Greycliff CF, sans-serif" }}
            >
              Đánh giá phim : {movie.danhGia}/10
            </Text>
            <a href={"#movieTheater"}>
              <Button
                variant="gradient"
                gradient={{ from: "orange", to: "red" }}
                uppercase
                style={{ width: "140px", marginTop: "20px" }}
              >
                BOOK TICKET
              </Button>
            </a>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Overview;
