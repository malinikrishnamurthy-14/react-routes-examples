import React from "react";
import Image1 from './image1.png';

const Home = () => {
  return (
    <div>
      <p className="landing-para">This is the home page</p>
      <p> Route configuration is as follows: </p>
      <img src={Image1} alt="routeconfiguration"></img>
    </div>
  );
};

export default Home;
