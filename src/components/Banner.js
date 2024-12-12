import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import bgImg1 from "../assets/images/bg-4.jpg";
import bgImg2 from "../assets/images/bg-5.jpg";


export default function Banner() {
  const navigate = useNavigate()

  const handleShop = ()=>{
    navigate("/men")
  }

  return (
    <div>
      <BannerSection>
        <BannerWrapper>
          <BannerLeft>
            <TextBox>
              <Slogan>WE MADE YOUR EVERYDAY FASHION BETTER!</Slogan>
              <Para>
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </Para>
              <Button onClick={()=>handleShop()}>Shop Now</Button>
            </TextBox>
          </BannerLeft>
          <BannerRight>
            <BannerImg src={bgImg2} alt="no-image" />
          </BannerRight>
        </BannerWrapper>
      </BannerSection>
    </div>
  );
}

const BannerSection = styled.div`
  margin: 60px auto;
  position: relative;
  padding: 0 60px;
  @media screen and (max-width: 700px) {
      margin: 40px auto;
      padding: 0px 50px;
  }
  @media screen and (max-width: 540px) {
      margin: 40px auto;
      padding: 0px 40px;
  }
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%; 
  height: 700px;
  @media screen and (max-width: 700px) {
      height: 500px;
  }
  @media screen and (max-width: 480px) {
      height: 360px;
  }
`;

const BannerLeft = styled.div`
  background-image: url(${bgImg1});
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 35px;
  border-top-left-radius: 15px; 
  border-bottom-left-radius: 15px;
  @media screen and (max-width: 540px) {
      padding-left: 20px;
  }
  @media screen and (max-width: 400px) {
      padding-left: 10px;
  }
`;

const BannerRight = styled.div`
  flex: 1; 
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover; 
`;

const TextBox = styled.div`
  width: 60%;
  @media screen and (max-width: 1160px) {
      width: 70%;
  }
  @media screen and (max-width: 980px) {
      width: 75%;
  }
  @media screen and (max-width: 640px) {
      width: 80%;
  }
`;

const Slogan = styled.h2`
  color: #ffffff;
  @media screen and (max-width: 940px) {
      font-size: 1.3rem;
  }
  @media screen and (max-width: 830px) {
      font-size: 1.1rem;
  }
  @media screen and (max-width: 640px) {
      font-size: 0.9rem;
  }
  @media screen and (max-width: 410px) {
      font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
      font-size: 0.7rem;
  }
`;

const Para = styled.p`
  color: #ffffff;
  font-weight: 300;
  @media screen and (max-width: 940px) {
      font-size: 0.8rem;
  }
  @media screen and (max-width: 940px) {
      font-size: 0.7rem;
  }
  @media screen and (max-width: 640px) {
      font-size: 0.6rem;
  }
  @media screen and (max-width: 410px) {
      font-size: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 8px 25px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff;
    border: 1px solid black;
  }
  @media screen and (max-width: 700px) {
      padding: 6px 20px;
      font-size: 0.6rem;
      margin-top: 8px;
  }
`;
