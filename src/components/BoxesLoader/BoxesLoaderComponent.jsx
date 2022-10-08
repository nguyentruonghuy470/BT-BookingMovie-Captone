import { Blocks } from "react-loader-spinner";

import React from "react";
import "./css/Load.css";
const BoxesLoaderComponent = () => {
  return (
    <div className="loader">
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default BoxesLoaderComponent;
