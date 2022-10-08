import React from "react";
import ReactDOM from "react-dom/client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "Open Sans",
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1200,
                    xl: 1320,
                  },
                },
              },
            },
            fontSizes: {
              xs: 10,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 24,
            },
          }}
        >
          <App />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
