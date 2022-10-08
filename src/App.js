import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";

import "./index.css";
import "./animate.css";
import "./customsize.css";
// import Login from "modules/Authentication/Pages/Login";
import MainLayout from "components/MainLayout";
import AuthLayout from "components/AuthLayout";
import CheckoutRoute from "routes/CheckoutRoute";
import Login from "modules/Authentication/Pages/Login";
import Register from "modules/Authentication/Pages/Register";
import Booking from "modules/Booking/Page/Booking";
import UserInformation from "modules/UserInformation/UserInformation";
import BoxesLoaderComponent from "components/BoxesLoader/BoxesLoaderComponent";
const Home = lazy(() => import("modules/Home/pages/Home"));
const Movie = lazy(() => import("modules/Movie/pages/Movie"));

// const Login = lazy(() => import("modules/Authentication/Pages/Login"));

function App() {
  return (
    <Suspense fallback={<BoxesLoaderComponent />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* index: path của child route khớp 100% với path của parent route */}
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="booking/:timeId" element={<Booking />} />
          <Route path="profile" element={<UserInformation />} />
          <Route
            path="checkout/:checkoutId"
            element={
              <CheckoutRoute>
                {/* <Checkout /> */}
                <h1>Checkout Component</h1>
              </CheckoutRoute>
            }
          />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
