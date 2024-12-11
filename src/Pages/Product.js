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

  
  // Update the useEffect to find the product by ID
  useEffect(() => {
    const product = productData.find(item => item.id === productId);  // Use .find() to get the correct product
    setProduct(product);  // Set product to the state
  }, [productId]); 

  useEffect(() => {
    const shuffledProducts = productData.sort(() => Math.random() - 0.5);  //Shuffle all products (both Men and Women)
    const randomProducts = shuffledProducts.slice(0, 4);     //Number of products to display
    setSimilarProducts(randomProducts);      //Set the state with random products
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
      [productId]: !prevState[productId], // Toggle like status
    }));
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); //
  };

  // Scroll to the top when page is loaded
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [productId]);

  // Return loading state if product is not set
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
        <Top>
          <Span></Span>
          <Heading>In The Limelight</Heading> 
        </Top> 
        <ProductGrid>
          {similarProducts.map((product) => (
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
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

const ImageSlider = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
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
`;

const ProductImage = styled.img`
  flex: 3;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Path = styled.div`
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
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
`

const SizeSection = styled.div`
  margin-bottom: 20px;
`;

const SizeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Text1 = styled.span`
    
`
const Text2 = styled.span`
    font-weight: 400;
    color: #807D7E;
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
`;

const ColorSection = styled.div`
  margin-bottom: 25px;
`;

const ColorTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
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
`;

const CartButton = styled.div`
    display: flex;
    gap: 20px;
`

const AddToCartButton = styled.button`
  padding: 15px 30px;
  display: flex;
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
`;

const GreyLine = styled.div`
margin: 25px 0px;
  width: 80%;
  height: 1px;
  background-color: #BEBCBD;
`;

const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
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
  margin: 15px auto;
  width: 100%;
  padding: 30px;
  max-width: 1300px;
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
`
const Container = styled.div`
   display: flex;
   align-items: flex-start;
`;

const LeftBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #807D7E;
`

const TabsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: first baseline;
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
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Create two columns */
  grid-template-rows: 2 3; /* Two rows for label/value pairs */ 
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
  font-weight: bold;
`;

const Value = styled.span`

`;

const CategoryContainer = styled.div`
margin: 50px auto;
width: 100%;
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 80%; 
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
`;

const LikeIcon = styled.svg`
width: 24px;
height: 24px;
fill: ${(props) => (props.liked ? 'red' : '#333')}; /* Change color to red if liked */
transition: fill 0.3s ease; /* Smooth transition for color change */

path {
  fill: ${(props) => (props.liked ? 'red' : '#333')}; /* Change color to red if liked */
}
`;

// SVG path for heart icon
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
`;

const BrandName = styled.p`
font-size: 0.9rem;
color: #7F7F7F;
font-weight: normal;
margin-top: 5px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const PriceBox = styled.div`
background-color: #f2f2f2;
padding: 5px 10px;
border-radius: 8px;
margin-right: 20px;
`;

const ProductPrice = styled.p`
font-size: 1rem;
color: #333;
font-weight: bold;
margin: 0;
`;

export default ProductDetailsPage;
