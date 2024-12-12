import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Data from '../json/Products.json'; 

const WomenCategory = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredProducts = Data.filter(product => product.type === 'Women');
    setWomenProducts(filteredProducts);
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <CategoryContainer>
      <Top>
        <Span></Span>
        <Heading>Categories For Women</Heading> 
      </Top> 
      <ProductGrid>
        {womenProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id}>
            <ProductImage 
              src={require(`../assets/images/${product.main_image}`)} 
              alt="No-Image" 
            />
            <CardDetails>
              <TextBox>
                <ProductCategory>{product.category}</ProductCategory>
                <ExploreNowText>Explore Now!</ExploreNowText>
              </TextBox>
              <ArrowRight 
                src={require('../assets/icons/arrow-right.svg').default}
                onClick={() => handleProductClick(product.id)}
              />
            </CardDetails>
          </ProductCard>
        ))}
      </ProductGrid>
    </CategoryContainer>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
`;

const Span = styled.div`
  background-color: #8A33FD;
  width: 10px;
  height: 30px;
`;

const Heading = styled.h1`
  @media screen and (max-width: 700px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const CategoryContainer = styled.div`
  margin: 30px ;
  padding: 30px;
  max-width: 1300px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
  max-height: 300px;
  @media screen and (max-width: 800px) {
    max-height: 250px;
  }
  @media screen and (max-width: 480px) {
    max-height: 200px;
  }
`;

const CardDetails = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductCategory = styled.h5`
  font-size: 1rem;
  font-weight: bolder;
  color: #333;
  margin: 2px;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const ExploreNowText = styled.p`
  font-size: 1rem;
  color: #7F7F7F;
  font-weight: normal;
  margin: 2px;
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const ArrowRight = styled.img`
  width: 20px;
  height: 20px;
  fill: #333;
  margin-left: 5px;
  cursor: pointer; 

  &:hover {
    fill: #000;
  }
  @media screen and (max-width: 600px) {
    width: 15px;
    height: 15px;
  }
`;

export default WomenCategory;
