import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';  
import styled from 'styled-components';
import Data from '../json/Products.json';
import leftArrow from "../assets/icons/arrow-left.svg"
import rightArrow from "../assets/icons/arrow-right.svg"


const Arrival = () => {
  const [arrivals, setArrivals] = useState([]);
  const slider = useRef(null);  // Ref to access the slider instance
  const navigate = useNavigate();

  useEffect(() => {
    setArrivals(Data);  
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true, // This enables the default Slick slider arrows

    responsive: [
      {
        breakpoint: 1260,  
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <NewArrivalsWrapper>
      <NewArrivalsSection>
        <Top>
          <Span></Span>
          <Heading>New Arrival</Heading> 
        </Top> 
        <SlickSlider {...settings} ref={slider}>
          {arrivals.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage
                src={require(`../assets/images/${product.main_image}`)} 
                onClick={() => handleProductClick(product.id)}
                alt={product.category}
              />
              <ProductCategory>{product.category}</ProductCategory>
            </ProductCard>
          ))}
        </SlickSlider>
      </NewArrivalsSection>
    </NewArrivalsWrapper>
  );
};

const NewArrivalsWrapper = styled.div`
  margin: 50px;
  box-sizing: border-box;
`;

const NewArrivalsSection = styled.div`
  padding:30px;
  padding-top: 20px;
  box-sizing: border-box;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const Span = styled.div`
  background-color: #8A33FD;
  width: 6px;
  height: 30px;
  border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 34px;
  margin-bottom: 20px;
  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 460px) {
    font-size: large;
  }
`;

const ProductCard = styled.div`
  padding: 8px;
  border-radius: 8px;
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 260px;
  @media screen and (max-width: 460px) {
    max-height: 200px;
  }
  @media screen and (max-width: 460px) {
    max-height: 180px;
  }
`;

const ProductCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  padding-top: 10px;
  color: #333;
`;

const SlickSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;

  }

  .slick-slide img{
    width: 260px;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-prev,
  .slick-next {
    display: block; // Ensure the default arrows are shown
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
  }

  .slick-prev::before {
    content: url(${leftArrow}); 
    position: absolute;
    left: 20px;
  }

  .slick-next::before {
    content: url(${rightArrow});
    position: absolute;
    right: 20px;
  } 

`;

export default Arrival;
