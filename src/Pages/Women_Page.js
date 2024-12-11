import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Data from '../json/Products.json'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WomenCategory = () => {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = Data.filter(product => product.type == 'Women');
    setWomenProducts(filteredProducts);
  }, []);

  return (
    <>
    <Navbar/>
    <CategoryContainer>
      <Top>
        <Span></Span>
        <Heading>Categories For Women</Heading> 
      </Top> 
      <ProductGrid>
        {womenProducts.map((product, index) => (
          <ProductCard key={product.id}>
            <ProductImage src={require(`../assets/images/${product.main_image}`)} alt="No-Image" />
            <CardDetails>
              <TextBox>
                <ProductCategory>{product.category}</ProductCategory>
                <ExploreNowText>Explore Now!</ExploreNowText>
              </TextBox>
              <ExploreLink to={`/product/${product.id}`}>
                <ArrowRight src={require('../assets/icons/arrow-right.svg').default}/>
              </ExploreLink>
            </CardDetails>
          </ProductCard>
        ))}
      </ProductGrid>
    </CategoryContainer>
    <Footer/>
    </>
  );
};

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
`

const Span = styled.div`
    background-color: #8A33FD;
    width: 10px;
    height: 30px;
`

const Heading = styled.h1`
`

const CategoryContainer = styled.div`
  margin: 15px auto;
  width: 100%;
  padding: 30px;
  max-width: 1300px;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;

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
`

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
`;

const ExploreNowText = styled.p`
  font-size: 1rem;
  color: #7F7F7F;
  font-weight: normal;
  margin: 2px;
`;

const ExploreLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  color: #333;
`;

const ArrowRight = styled.img`
  width: 20px;
  height: 20px;
  fill: #333;
  margin-left: 5px;

  &:hover {
    fill: #000;
  }
`;

export default WomenCategory;
