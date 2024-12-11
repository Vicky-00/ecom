import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import userImg1 from "../assets/images/user1.png"
import userImg2 from "../assets/images/user2.png"
import userImg3 from "../assets/images/user3.png"


const Feedback = () => {
  const settings = {
    dots: true,          
    infinite: true,              
    speed: 500,            
    slidesToShow: 3,       
    slidesToScroll: 3,       
    autoplay: true,  
    autoplaySpeed: 3000,   
    arrows:false,   
    responsive: [
      {
          breakpoint: 1260,  
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 860,
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
    <FeedbackContainer>
      <Top>
        <Span></Span>
        <Heading>Feedback</Heading> 
      </Top> 
      <Slider {...settings}>
        <DivBox>
        <FeedbackCard>
          <UserImage src={userImg1} alt="John Doe's profile" />
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < 4}>★</Star>
            ))}
          </RatingContainer>
          <UserName>John Doe</UserName>
          <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
        </FeedbackCard>
        </DivBox>

        <DivBox>
        <FeedbackCard>
          <UserImage src={userImg2} alt="Jane Smith's profile" />
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < 5}>★</Star>
            ))}
          </RatingContainer>
          <UserName>Jane Smith</UserName>
          <FeedbackText>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
        </FeedbackCard>
        </DivBox>

        <DivBox>
        <FeedbackCard>
          <UserImage src={userImg3} alt="Michael Brown's profile" />
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < 3}>★</Star>
            ))}
          </RatingContainer>
          <UserName>Michael Brown</UserName>
          <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
        </FeedbackCard>
        </DivBox>

        <DivBox>
        <FeedbackCard>
          <UserImage src={userImg2} alt="Jane Smith's profile" />
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < 4}>★</Star>
            ))}
          </RatingContainer>
          <UserName>Jane Smith</UserName>
          <FeedbackText>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
        </FeedbackCard>
        </DivBox>

        <DivBox>
        <FeedbackCard>
          <UserImage src={userImg1} alt="John Doe's profile" />
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < 5}>★</Star>
            ))}
          </RatingContainer>
          <UserName>John Doe</UserName>
          <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
        </FeedbackCard>
        </DivBox>

        <DivBox>
        <FeedbackCard>
          <UserImage src={userImg3} alt="Michael Brown's profile" />
          <RatingContainer>
            {[...Array(5)].map((_, i) => (
              <Star key={i} active={i < 3}>★</Star>
            ))}
          </RatingContainer>
          <UserName>Michael Brown</UserName>
          <FeedbackText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</FeedbackText>
        </FeedbackCard>
        </DivBox>

      </Slider>
    </FeedbackContainer>
  );
};


const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Span = styled.div`
    background-color: #8A33FD;
    width: 10px;
    height: 30px;
`

const Heading = styled.h1`
`

const DivBox = styled.div`
`

const FeedbackContainer = styled.div`
  margin: 50px;
  position: relative;
  max-width: 1350px;
  padding: 0 15px;
  @media screen and (max-width: 390px) {
    margin: 30px;
  }
`;

const FeedbackCard = styled.div`
  border: 2px solid #BEBCBD;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffff;
  position: relative;
  height: auto;
  margin: 25px 15px 20px 0px;
  height: 320px;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    height: 270px;
  }
  @media screen and (max-width: 680px) {
    height: 230px;
  }
  @media screen and (max-width: 470px) {
    height: 270px;
  }
  @media screen and (max-width: 408px) {
    height: 320px;
  }
`

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  object-fit: cover;
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Star = styled.span`
  color: ${(props) => (props.active ? "#FFD700" : "#e0e0e0")};
  font-size: 1.5rem;
  margin-left: 5px;
`;

const UserName = styled.h3`
  margin-top: 70px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const FeedbackText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;


export default Feedback;
