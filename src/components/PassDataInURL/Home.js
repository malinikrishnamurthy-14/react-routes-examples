import React from "react";
import Image1 from './Image1.png';
import Image2 from './Image2.png';

const Home = () => {
  return (
    <div>
      <p className="landing-para">This is the home page</p>
      <p> Route configuration is as follows: </p>
      <img src={Image1} alt="routeconfiguration"></img>
      <img src={Image2} alt="routeconfiguration"></img>
    </div>
  );
};

export default Home;
