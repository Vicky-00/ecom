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
      <CategoryWrapper>
      <CategoryContainer>
        <Top>
          <Span></Span>
          <Heading>In The Limelight</Heading> 
        </Top> 
        <ProductGrid>
          {womenProducts.slice(5, 9).map((product) => (
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
  padding: 30px;
  box-sizing: border-box;
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

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const LikeButton = styled.div`
  position: absolute;
  display: flex;
  top: 25px;
  right: 20px;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
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
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.liked ? 'red' : '#333')}; /* Change color to red if liked */
  transition: fill 0.3s ease;

  path {
    fill: ${(props) => (props.liked ? 'red' : '#333')}; /* Change color to red if liked */
  }
  @media screen and (max-width: 780px) {
    width: 20px;
    height: 20px;
  }
`;

LikeIcon.defaultProps = {
  children: (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#1C274C"></path> </g></svg>
  ),
};

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-bottom: 2px solid #ddd;

  cursor: pointer;
  
  @media screen and (max-width: 800px) {
    max-height: 250px;
  }

  @media screen and (max-width: 480px) {
    max-height: 200px;
  }
`;

const CardDetails = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  max-width: 130px;
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
