import React, { useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; // For extracting the productId from the URL
import productData from '../json/Products.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetailsPage = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([])
  const [likedProducts, setLikedProducts] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const product = productData.find(item => item.id === productId);  
    setProduct(product);  
  }, [productId]); 

  useEffect(() => {
    const shuffledProducts = productData.sort(() => Math.random() - 0.5);  
    const randomProducts = shuffledProducts.slice(0, 4);    
    setSimilarProducts(randomProducts);    
  }, []);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleLike = (productId) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], 
    }));
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); //
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [productId]);

  
  if (!product) return <div>Loading...</div>;

  return (
    <>
    <Navbar/>
    <PageContainer>
      {/* Left Section: Product Images */}
      <LeftSection>
        <ImageSlider>
          {product.images.map((image, index) => (
            <Thumbnail
              key={index}
              src={require(`../assets/images/${image}`)}
              active={index === activeImage}
              onClick={() => setActiveImage(index)}
            />
          ))}
          <ArrowButton onClick={() => setActiveImage((activeImage + 1) % product.images.length)}>
            &#8595; {/* Down arrow */}
          </ArrowButton>
        </ImageSlider>
        <ProductImage src={require(`../assets/images/${product.images[activeImage]}`)} alt="Product" />
      </LeftSection>

      {/* Right Section: Product Details */}
      <RightSection>
        <Path>Shop &gt; {product.type} &gt; {product.category}</Path>
        <ProductTitle>{product.name}</ProductTitle>

        {/* Rating and Comments */}
        <RatingSection>
          {Array.from({ length: Math.round(product.ratings) }, (_, index) => (
            <StarIcon key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <polygon points="10,15 4,19 6,12 0,7 8,7 10,0 12,7 20,7 14,12 16,19" />
            </StarIcon>
          ))}
          <span>{product.ratings}/5</span>
          <CommentsIcon src={require("../assets/icons/message.svg").default}> 
          </CommentsIcon>
          <CommentText>{product.comments} Comments</CommentText>
        </RatingSection>

        {/* Select Size */}
        <SizeSection>
          <SizeTitle>
            <Text1>Select Size</Text1>
            <Text2>Size Guide &#8594;</Text2>
          </SizeTitle>
          <SizeBox>
            {product.size.map((size) => (
              <SizeOption 
                key={size} 
                selected={size === selectedSize} 
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </SizeOption>
            ))}
          </SizeBox>
        </SizeSection>

        {/* Colors */}
        <ColorSection>
          <ColorTitle>Colors Available</ColorTitle>
          <ColorBox>
            {product.colors.map((color) => (
              <ColorOption 
                key={color} 
                color={color} 
                selected={color === selectedColor} 
                onClick={() => handleColorSelect(color)} 
              />
            ))}
          </ColorBox>
        </ColorSection>

        {/* Add to Cart and Price */}
        <CartButton>
          <AddToCartButton>
            <CartIcon src={require("../assets/icons/cart-1.svg").default} alt='no-svg' />
            Add to Cart
        </AddToCartButton>
          <Price>{product.currency}{product.price}</Price>
        </CartButton>


        <GreyLine />

        {/* Bottom Info Section */}
        <BottomInfo>
          <InfoItem>
            <InfoIcon src={require("../assets/icons/credit card.svg").default} />
            <InfoText>Secure Payment</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src={require("../assets/icons/Size&Fit.svg").default} />
            <InfoText>Free Shipping</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src={require("../assets/icons/truck.svg").default} />
            <InfoText>Size & Fit</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon src={require("../assets/icons/Free-Shipping&Returns.svg").default} />
            <InfoText>Free Returns</InfoText>
          </InfoItem>
        </BottomInfo>
      </RightSection>
    </PageContainer>
    <ProductDescription>
      <Top>
        <Span></Span>
        <Heading>Product Description</Heading> 
      </Top> 
      <Container>
      <LeftBox>
      <TabsContainer>
        <Tab1>Description <Line></Line></Tab1>
        <Tab2>User Comments &nbsp; <Num1>21</Num1> </Tab2>
        <Tab3>Question & Answer &nbsp; <Num2>4</Num2></Tab3>
      </TabsContainer>
      <Description> {product.description} </Description>
      </LeftBox>
      <DetailsContainer>
        <Detail>
          <Label>Fabric</Label>
          <Value>Bio-washed Cotton</Value>
        </Detail>
        <Detail>
          <Label>Pattern</Label>
          <Value>Printed</Value>
        </Detail>
        <Detail>
          <Label>Fit</Label>
          <Value>Regular-fit</Value> 
        </Detail>
        <Detail>
          <Label>Neck</Label>
          <Value>Regular-fit</Value>            
        </Detail>
        <Detail>
          <Label>Sleeve</Label>
          <Value>Regular-fit</Value>            
        </Detail>
        <Detail>
          <Label>Style</Label>
          <Value>Regular-fit</Value>            
        </Detail>
      </DetailsContainer>
    </Container>
    </ProductDescription>
    <CategoryContainer>
        <TopBox>
          <Span1></Span1>
          <Heading1>In The Limelight</Heading1> 
        </TopBox> 
        <ProductGrid>
          {similarProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id}>
              {/* Like Button SVG */}
              <LikeButton onClick={() => handleLike(product.id)}>
                <LikeIcon
                  liked={likedProducts[product.id] ? true : false} // Pass the liked status to change the color
                />
              </LikeButton>
  
              <SimilarProductImage src={require(`../assets/images/${product.main_image}`)} alt="No-Image" onClick={() => handleProductClick(product.id)} />
              <CardDetails>
                <LeftSide>
                  <ProductName>{product.name}</ProductName>
                  <BrandName>{product.brand}</BrandName> {/* Displaying the brand name */}
                </LeftSide>
                <RightSide>
                  <PriceBox>
                    <ProductPrice>${product.price}</ProductPrice> {/* Displaying price */}
                  </PriceBox>
                </RightSide>
              </CardDetails>
            </ProductCard>
          ))}
        </ProductGrid>
      </CategoryContainer>
    <Footer/>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 40px 40px 0px;
  @media screen and (max-width: 980px) {
    padding-bottom: 0px;
  }
  @media screen and (min-width: 650px) and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: left;
    gap: 25px;
    margin-left: 50px;
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: left;
    gap: 25px;
    margin-left: 40px;
  }
  @media screen and (min-width: 401px) and (max-width: 500px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 400px) {
    margin: 0px;
    padding: 0px;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  gap: 20px;
  @media screen and (min-width: 650px) and (max-width: 800px) {
    width: 80%;
  }

`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  @media screen and (max-width: 800px) {
    width: 80%;
    padding-left: 5px;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  @media screen and (max-width: 980px) {
    padding-left: 15px;
  }
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 5px;
  cursor: pointer;
  border: ${(props) => (props.active ? '2px solid #007bff' : 'none')};
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }

`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-top: 5px;
    padding: 6px;
  }
`;

const ProductImage = styled.img`
  flex: 3;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  @media screen and (max-width: 502px) {
    min-height: 300px;
  }
`;

const Path = styled.div`
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  @media screen and (max-width: 1040px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 801px)  and (max-width: 980px) {
    font-size: 1.4rem;
    max-width: 280px;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 500px;
  }
  @media screen and (min-width: 471px) and (max-width: 600px) {
    width: 400px;
  }
  @media screen and (max-width: 470px) {
    font-size: 1.4rem;
    max-width: 300px;
    padding-left: 15px;
  }
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  @media screen and (max-width: 1040px) {
    font-size: 0.9rem;
    gap: 6px;
  }
  @media screen and (max-width: 470px) {
    font-size: 0.7rem;
    width: 340px;
    gap: 3px;
  }
  @media screen and (max-width: 470px) {
    padding-left: 15px;
    max-width: 280px;
  }
`;

const StarIcon = styled.svg`
  fill: #f1c40f;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const CommentsIcon = styled.img`
  fill: #888;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const CommentText = styled.p`
  @media screen and (max-width: 470px) {
    font-size:10px;
  }
`

const SizeSection = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;

const SizeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Text1 = styled.span`
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
    
`
const Text2 = styled.span`
    font-weight: 400;
    color: #807D7E;
    @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`

const SizeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SizeOption = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;

  ${(props) =>
    props.selected &&
    `
    border: 2px solid black;
    background-color: black;
    color : #ffff;
  `};
  @media screen and (max-width: 1040px) {
    width : 40px;
    height : 40px;
  }
  @media screen and (max-width: 500px) {
    width : 30px;
    height : 30px;
    border-radius:8px;
  }
`;

const ColorSection = styled.div`
  margin-bottom: 25px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;

const ColorTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const ColorBox = styled.div`
  display: flex;
  gap: 15px;
`

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? '3px solid #007bff' : '2px solid transparent'};
  transition: all 0.3s;

  &:hover {
    border: 3px solid #007bff;
  }
  @media screen and (max-width: 1040px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 470px) {
    width: 20px;
    height: 20px;
  }
`;

const CartButton = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 470px) {
     padding-left: 15px;
    }
`

const AddToCartButton = styled.button`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: white;
  background-color: #8A33FD;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
  @media screen and (max-width: 470px) {
    padding: 15px 20px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
    padding: 10px 15px;
  }
`;

const CartIcon = styled.img`
`

const Price = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  color: black;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
    color: #fff;
  }
  @media screen and (max-width: 470px) {
    padding: 15px 20px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
    padding: 10px 15px;
  }
`;

const GreyLine = styled.div`
  margin: 25px 0px;
  width: 80%;
  height: 1px;
  background-color: #BEBCBD;
  @media screen and (max-width: 800px) {
    width: auto;
  }
  @media screen and (max-width: 470px) {
    margin: 25px 8px;
  }
`;

const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
`;

const InfoIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  padding: 10px;
  border-radius: 50%;
  background-color: #F6F6F6;
`;

const InfoText = styled.p`
`
const ProductDescription = styled.div`
  margin: 30px;
  padding: 20px;
  max-width: 1300px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
    @media screen and (max-width:470px) {
     max-width: 340px;
   }
   @media screen and (max-width:407px) {
     max-width: 200px;
   }
`

const Span = styled.div`
    background-color: #8A33FD;
    width: 10px;
    height: 30px;
`

const Heading = styled.h1`
   @media screen and (max-width:470px) {
     font-size: 1.5rem;
   }
`
const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-wrap: wrap;
   justify-content: space-around;
   gap: 10px;
   @media screen and (max-width: 1158px) {
     justify-content:flex-start;
     gap: 20px;
   }
`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    color: #807D7E;
`

const TabsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: first baseline;
  @media screen and (max-width:535px) {
    flex-wrap: wrap;
   }
`;

const Tab1 = styled.div`
  color: black;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Line = styled.div`
  width: 2rem;
  height: 2px;
  background-color: purple;
`

const Tab2 = styled.div`
  display: flex;
  align-items: center;
`;

const Tab3 = styled.div`
  display: flex;
  align-items: center;
`;

const Num1 = styled.span`
  color: white;
  border: 1px solid purple;
  background-color: purple;
  padding: 3px;
  font-size: x-small;
  border-radius: 4px;
`
const Num2 = styled.span`
  color: white;
  border: 1px solid black;
  background-color: black;
  padding: 3px 6px;
  font-size: x-small;
  border-radius: 4px;
`

const Description = styled.p`
  margin: 20px auto;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2 3; 
  @media screen and (max-width:370px) {
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 3 2;
   }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  border: 1px solid #f5f0f0; 
  background-color: #F6F6F6;
`;

const Label = styled.span`
color: #807D7E;
  font-weight: 400;
  @media screen and (max-width:470px) {
    font-size: 0.8rem;
   }
`;

const Value = styled.span`
font-weight: 500;
  @media screen and (max-width:470px) {
    font-size: 0.8rem;
   }
`;

const TopBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
`;

const Span1 = styled.div`
    background-color: #8A33FD;
    width: 10px;
    height: 30px;
`;

const Heading1 = styled.h1`
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
  margin: 30px;
  padding: 20px;
  max-width: 1300px;
  @media screen and (max-width: 470px) {
    margin: 20px;
  }
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
  fill: ${(props) => (props.liked ? 'red' : '#333')}; 
  transition: fill 0.3s ease;

  path {
    fill: ${(props) => (props.liked ? 'red' : '#333')}; 
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

const SimilarProductImage = styled.img`
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
  @media screen and (max-width:540px){
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 8px;
    padding: 10px 0px;
  }
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
    max-width: 140px;
    margin: 2px 0px;
  }
  @media screen and (max-width: 490px) {
    max-width: 100px;
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
  @media screen and (min-width: 541px) and (max-width: 780px) {
    font-size: 0.7rem;
    max-width: 100px;
  }
  @media screen and (max-width:540px){
    font-size: 0.7rem;
    margin: 0px;
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

export default ProductDetailsPage;
