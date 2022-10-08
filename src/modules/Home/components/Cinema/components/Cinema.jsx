import "../css/MovieShowingStyle.css";

import { useSelector, useDispatch } from "react-redux";

import useRequest from "hooks/useRequest";
import movieAPI from "../../../../../apis/movieAPI";

import React, { useState, useEffect } from "react";
import { Tabs } from "@mantine/core";

const Cinema = ({ getAddres }) => {
  const {
    data: movieCinema,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieCinema());
  // useEffect(() => {
  //   dispatch(getMovieCinema());
  // }, []);
  return (
    <>
      <div className="MuiBox-root">
        <Tabs defaultValue="BHDStar">
          <Tabs.List className="flex-column">
            {movieCinema?.map((i) => {
              return (
                <Tabs.Tab
                  className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss161 Mui-selected"
                  value={i.maHeThongRap}
                  key={i.maHeThongRap}
                  onClick={() => getAddres(i.maHeThongRap)}
                >
                  <span className="MuiTab-wrapper">
                    <div className="MuiAvatar-circle">
                      <img
                        alt="bhd-star-cineplex"
                        src={i.logo}
                        className="MuiAvatar-img"
                      />
                    </div>
                  </span>
                </Tabs.Tab>
              );
            })}
          </Tabs.List>
        </Tabs>
      </div>
    </>
  );
};

export default Cinema;
