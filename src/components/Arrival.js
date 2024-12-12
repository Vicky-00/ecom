import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';  
import styled from 'styled-components';
import Data from '../json/Products.json';  

const Arrival = () => {
    const [arrivals, setArrivals] = useState([]);
    const slider = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setArrivals(Data);  
    }, []);

    const handleProductClick = (productId) => {
      navigate(`/product/${productId}`); //
    };

    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <div style={{ fontSize: '30px', color: 'black' }}></div>,  
        nextArrow: <div style={{ fontSize: '30px', color: 'black' }}></div>,  

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
                            onClick={()=>handleProductClick(product.id)}
                            alt={product.category}
                        />
                        <ProductCategory>{product.category}</ProductCategory>
                    </ProductCard>
                ))}
            </SlickSlider>
        </NewArrivalsSection>
    );
};

const NewArrivalsSection = styled.div`
  padding:30px;
  padding-top: 20px;
  text-align: center;
  position: relative;
  margin: 10px 35px 10px 35px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
`

const Span = styled.div`
    background-color: #8A33FD;
    width: 10px;
    height: 30px;
`

const Heading = styled.h1`
  margin-bottom: 20px;
  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 460px) {
    font-size: large;
  }
`

const ProductCard = styled.div`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
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
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`;

const SlickSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    display: none !important;  
  }


  .slick-prev,
  .slick-next {
    font-size: 30px;               
    color: black;                 
    background: black; 
    border-radius: 50%;           
    padding: 10px;                
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.8); 
    color: white;                       
  }

  .slick-next {

    left:100%;
  }
`;

export default Arrival;
