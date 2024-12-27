import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Data from '../json/Products.json';

const MenCategory = () => {
  const [menProducts, setMenProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredProducts = Data.filter(product => product.type === 'Men');
    setMenProducts(filteredProducts);
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <CategoryWrapper>
    <CategoryContainer>
      <Top>
        <Span></Span>
        <Heading>Categories For Men</Heading>
      </Top>
      <ProductGrid>
        {menProducts.slice(0, 8).map((product) => (
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
    </CategoryWrapper>
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
    width: 6px;
    height: 30px;
    border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 34px;
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

const CategoryWrapper = styled.div`
  margin: 50px;
`

const CategoryContainer = styled.div`
  margin-top: 0px;
  padding: 30px;
  box-sizing: border-box; 
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 50px;
  width: 100%;  

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
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
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
  @media screen and (max-width: 800px) {
    max-height: 250px;
    object-fit: fill;
  }
  @media screen and (max-width: 480px) {
    max-height: 200px;
    object-fit: fill;
  }
`;

const CardDetails = styled.div`
  padding: 10px 0px;
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
  color: #7f7f7f;
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

export default MenCategory;
