import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import bgImg1 from "../assets/images/bg-2.jpg"
import bgImg2 from "../assets/images/bg-3.jpg"


export default function Cards() {
  return (
    <div>
        <CardWrapper>
            <CardSection>

                <CardLeft>
                  <Price>Low Price</Price>
                  <TextBox>
                    <Text>High Coziness</Text>
                    <Off>UPTO 50% OFF</Off>
                  </TextBox>
                  <Explore to={'/women'}>Explore Items</Explore>
                </CardLeft>

                <CardRight>
                  <Price>Beyoung Presents</Price>
                  <TextBox>
                    <Text>High Coziness</Text>
                    <Off>UPTO 50% OFF</Off>
                  </TextBox>
                  <Explore to={'/women'}>Explore Items</Explore>
                </CardRight>

            </CardSection>
        </CardWrapper>
    </div>
  )
}


const CardWrapper = styled.div`
  margin: 50px auto;
  position: relative;
  padding: 0 15px;
`

const CardSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin : 0px 20px;
    @media screen and (max-width: 785px) {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
`

const CardLeft = styled.div`
    background-image: url(${bgImg1});
    background-size: 150%; 
    width: 40%;
    padding: 70px 20px;
    border-radius: 15px;
    box-shadow: 6px 0 10px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 785px) {
      width:70%;
    }
    @media screen and (max-width: 525px) {
      padding: 40px 20px;
    }
    @media screen and (max-width: 450px) {
      background-size: 150%;
      padding: 30px 20px;
    }
`

const CardRight = styled.div`
    background-image: url(${bgImg2});
    background-size: 130%; 
    width: 44%;
    padding: 70px 20px;
    border-radius: 15px;
    box-shadow: 6px 0 10px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 785px) {
      width:70%;
    }
    @media screen and (max-width: 525px) {
      background-size: 150%;
      padding: 40px 20px;
    }
    @media screen and (max-width: 450px) {
      background-size: 150%;
      padding: 30px 20px;
    }
`

const Price = styled.h5`
    color: #ffffff;
    @media screen and (max-width: 490px) {
      font-size: 0.8rem;
    }
`

const TextBox = styled.div`
`

const Text = styled.h2`
    color: #ffffff;
    @media screen and (max-width: 490px) {
      font-size: 1.2rem;
      font-weight: bold;
    }
`

const Off = styled.p`
    color: #ffffff;
    @media screen and (max-width: 490px) {
      font-size: 0.7rem;
    }
`

const Explore = styled(Link)`
    color: #ffffff;
    font-weight: 500;
    &:hover{
        color: black;
    }
`