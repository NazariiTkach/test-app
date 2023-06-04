import React from "react";
import background_image from "../../images/background_image.png";


const Home = () => {
  return (
    <HomeSection>
      <Title>Your Tweet App</Title>
      <BackgroundImage src={background_image}></BackgroundImage>
    </HomeSection>
  );
};

export default Home;
