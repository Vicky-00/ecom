import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Data from '../json/Products.json'; 

const LimeLight = () => {
    const [womenProducts, setWomenProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      const filteredProducts = Data.filter(product => product.type === 'Women');
      setWomenProducts(filteredProducts);
    }, []);

    const handleProductClick = (productId) => {
      navigate(`/product/${productId}`);
    };
  
    const handleLike = (productId) => {
      setLikedProducts((prevState) => ({
        ...prevState,
        [productId]: !prevState[productId], 
      }));
    };
  
    return (
      <CategoryContainer>
        <Top>
          <Span></Span>
          <Heading>In The Limelight</Heading> 
        </Top> 
        <ProductGrid>
          {womenProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id}>
              {/* Like Button SVG */}
              <LikeButton onClick={() => handleLike(product.id)}>
                <LikeIcon
                  liked={likedProducts[product.id] ? true : false} 
                />
              </LikeButton>
  
              <ProductImage src={require(`../assets/images/${product.main_image}`)} alt="No-Image" onClick={() => handleProductClick(product.id)} />
              <CardDetails>
                <LeftSide>
                  <ProductName>{product.name}</ProductName>
                  <BrandName>{product.brand}</BrandName> 
                </LeftSide>
                <RightSide>
                  <PriceBox>
                    <ProductPrice>${product.price}</ProductPrice> 
                  </PriceBox>
                </RightSide>
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
  font-size: 2rem;
  font-weight: bold;
  
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
  margin: 50px 30px;
  padding: 30px;
  max-width: 1300px;
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

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LikeButton = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); 
  }
  @media screen and (max-width: 780px) {
    padding: 4px;
  }
`;

const LikeIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(props) => (props.liked ? 'red' : '#333')}; /* Change color to red if liked */
  transition: fill 0.3s ease;

  path {
    fill: ${(props) => (props.liked ? 'red' : '#333')}; /* Change color to red if liked */
  }
  @media screen and (max-width: 780px) {
    width: 24px;
    height: 20px;
  }
`;

LikeIcon.defaultProps = {
  children: (
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  ),
};

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
  max-height: 300px;
  cursor: pointer;
  
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
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%; 
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%; 
`;

const ProductName = styled.h5`
  font-size: 1rem;
  font-weight: bolder;
  color: #333;
  margin: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  @media screen and (max-width: 900px) {
    max-width: 120px;
  }
  @media screen and (max-width: 780px) {
    font-size: 0.9rem;
    max-width: 100px;
  }
  @media screen and (max-width: 680px) {
    max-width: 90px;
  }
  @media screen and (max-width: 600px) {
    max-width: 120px;
  }
  @media screen and (max-width: 490px) {
    max-width: 80px;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.7rem;
    max-width: 60px;
  }
`;

const BrandName = styled.p`
  font-size: 0.9rem;
  color: #7F7F7F;
  font-weight: normal;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 780px) {
    font-size: 0.7rem;
    max-width: 100px;
  }
`;

const PriceBox = styled.div`
  background-color: #f2f2f2;
  padding: 5px 10px;
  border-radius: 8px;
  margin-right: 20px;
  @media screen and (max-width: 780px) {
    padding: 5px 8px;
  }
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 780px) {
    font-size: 0.8rem;
    max-width: 100px;
  }
  @media screen and (max-width: 680px) {
    font-size: 0.7rem;
    max-width: 90px;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
    max-width: 100px;
  }
`;

export default LimeLight;
