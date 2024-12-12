import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import bgImg1 from "../assets/images/bg-1.jpg"
import bgImg2 from "../assets/images/bg-2.jpg"
import bgImg3 from "../assets/images/bg-3.jpg"


export default function Carousel() {
    const slider = useRef(null);
    const navigate = useNavigate()

    const slides = [
        { 
          title: "T-Shirts / Tops", 
          subtitle: "Summer Value Pack", 
          content: "Cool / Colorful / Comfy",
          bgImage: `${bgImg1}` 
        },
        { 
          title: "Hoodies / Jackets", 
          subtitle: "Winter Wear", 
          content: "Warm / Stylish / Soft",
          bgImage: `${bgImg2}` 
        },
        { 
          title: "Sneakers / Accessories", 
          subtitle: "Outdoor Essentials", 
          content: "Durable / Stylish / Comfortable",
          bgImage: `${bgImg3}` 
        },
      ];

      const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay : false,
        autoplaySpeed : 3000,
        pauseOnHover : true,
        arrows : false,
      };

      const handleShop = ()=>{
          navigate("/women")
      }

  return (
    <CarouselContainer>
      <Slider {...settings} ref={slider}>
        {slides.map((slide, index) => (
          <Slide key={index} bgImage={slide.bgImage}>
            <ContentBox>
                <Heading1>{slide.title}</Heading1>
                <Heading2>{slide.subtitle}</Heading2>
                <Paragraph>{slide.content}</Paragraph>
                <Button onClick={()=>handleShop()}>Shop Now</Button>
            </ContentBox>
          </Slide>
        ))}
      </Slider>

      <Arrow left onClick={() => slider.current.slickPrev()}>{'<'}</Arrow>
      <Arrow onClick={() => slider.current.slickNext()}>{'>'}</Arrow>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0px auto;
`;

const Slide = styled.div`
  padding: 150px;
  text-align: center;
  box-sizing: border-box;
  height: 600px; 
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
    height : 350px;
  }
  @media screen and (max-width: 420px) {
    height : 300px;
  }
`;

const ContentBox = styled.div`
    justify-items: left;
`

const Heading1 = styled.h3`
  font-size: 1.5rem;
  @media screen and (max-width: 980px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
  }
`;

const Heading2 = styled.h1`
  font-size: 3.5rem;
  @media screen and (max-width: 980px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 10px 25px;
  margin-top: 10px;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: #fff;
  }
  @media screen and (max-width: 980px) {
    padding: 8px 15px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 540px) {
    padding: 8px 15px;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    padding: 6px 12px;
    font-size: 0.5rem;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 30rem;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
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