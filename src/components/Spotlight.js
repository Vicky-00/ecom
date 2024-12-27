import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import bgImg1 from "../assets/images/bg-1.jpg";
// import bgImg2 from "../assets/images/bg-2.jpg";
import bgImg2 from "../assets/images/bg-3.jpg";
import leftArrow from "../assets/icons/vector-left.svg";
import rightArrow from "../assets/icons/vector-right.svg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const slider = useRef(null);
  const navigate = useNavigate();

  const slides = [
    { 
      title: "T-Shirts / Tops", 
      subtitle: "Summer Value Pack", 
      content: "Cool / Colorful / Comfy",
      bgImage: `${bgImg1}` 
    },
    // { 
    //   title: "Hoodies / Jackets", 
    //   subtitle: "Winter Wear", 
    //   content: "Warm / Stylish / Soft",
    //   bgImage: `${bgImg2}` 
    // },
    { 
      title: "Sneakers / Accessories", 
      subtitle: "Outdoor Essentials", 
      content: "Durable / Stylish / Comfortable",
      bgImage: `${bgImg2}` 
    },
  ];

  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next), // Update the current slide when it changes
  };

  const handleShop = () => {
    navigate("/women");
  };

  return (
    <CarouselContainer>
      <Slider {...settings} ref={slider}>
        {slides.map((slide, index) => (
          <Slide key={index} bgImage={slide.bgImage}>
            <ContentBox>
              <Heading1>{slide.title}</Heading1>
              <Heading2>{slide.subtitle}</Heading2>
              <Paragraph>{slide.content}</Paragraph>
              <Button onClick={handleShop}>Shop Now</Button>
            </ContentBox>
          </Slide>
        ))}
      </Slider>

      <Arrow left onClick={() => slider.current.slickPrev()}>
        <Image src={leftArrow} alt="Previous" />
      </Arrow>
      <Arrow onClick={() => slider.current.slickNext()}>
        <Image src={rightArrow} alt="Next" />
      </Arrow>

      {/* Carousel Indicator */}
      <IndicatorContainer>
        {slides.map((_, index) => (
          <IndicatorPortion
            key={index}
            active={currentSlide === index} // Active portion based on currentSlide
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
}

// Styled components
const CarouselContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  position: relative;
`;

const Slide = styled.div`
  padding: 150px;
  text-align: center;
  box-sizing: border-box;
  height: 790px; 
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  color: white; 
  justify-items: left;

  @media screen and (max-width: 980px) {
    padding: 100px;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    padding: 80px;
    height: 450px;
  }
  @media screen and (max-width: 640px) {
    height: 400px;
  }
  @media screen and (max-width: 540px) {
    height: 350px;
  }
  @media screen and (max-width: 420px) {
    height: 300px;
  }
`;

const ContentBox = styled.div`
  justify-items: left;
`;

const Heading1 = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

const Heading2 = styled.h1`
  font-size: 78px;
  max-width: 400px;
  text-align: left;
`;

const Paragraph = styled.h4`
  font-size: 32px;
`;

const Button = styled.button`
  width: 240px;
  padding: 15px ;
  margin-top: 10px;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const Image = styled.img``;

const Arrow = styled.button`
  position: absolute;
  top: 23rem;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1;

  @media screen and (max-width: 980px) {
    top: 27rem;
  }
  @media screen and (max-width: 768px) {
    top: 22rem;
  }
  @media screen and (max-width: 640px) {
    top: 20rem;
  }
  @media screen and (max-width: 540px) {
    top: 17rem;
  }
  @media screen and (max-width: 420px) {
    top: 15rem;
  }
`;

// Carousel Indicator Styles
const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const IndicatorPortion = styled.div`
  width: 60px;
  height: 10px;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "white" : "gray")};
  transition: background-color 0.3s;
`;

