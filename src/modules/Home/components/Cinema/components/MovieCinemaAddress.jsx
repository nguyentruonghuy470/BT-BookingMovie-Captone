import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import "../css/MovieShowingStyle.css";
import { Tabs } from "@mantine/core";

const MovieCinemaAddress = ({ movieId, getDate }) => {
  console.log(movieId);
  const {
    data: movie1,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieCinemaDetails(movieId), {
    isManual: false,
    deps: [movieId],
  });
  const hh = movie1?.map((i) =>{
    return i.maCumRap
  })
  return (
    <>
      <div className="MuiBox-root">
        <Tabs orientation="vertical">
          <Tabs.List className="flex-column">
            {movie1?.map((i) => {
              return (
                <Tabs.Tab
                  className="p-0 TabMovieCinemaAddress"
                  value={i.maCumRap}
                  key={i.tenCumRap}
                  onClick={() => getDate(i.maCumRap)}
                >
                  <div className="MuiTabs-flexContainer">
                    <div className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss163">
                      <span className="MuiTab-wrapper jss205">
                        <div>
                          <h4 className="MuiTypography-root jss165 MuiTypography-h4">
                            {i.tenCumRap}
                          </h4>
                          <h6 className="MuiTypography-root jss166 MuiTypography-h6">
                            {i.diaChi}
                          </h6>
                          <a className="jss167" href="/">
                            [chi tiết]
                          </a>
                        </div>
                      </span>
                    </div>
                  </div>
                </Tabs.Tab>
              );
            })}
          </Tabs.List>
        </Tabs>
      </div>
    </>
  );
};

export default MovieCinemaAddress;
