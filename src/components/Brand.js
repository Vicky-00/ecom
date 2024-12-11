import React from 'react'
import styled from 'styled-components'

import img1 from "../assets/images/nike.jpg"
import img2 from "../assets/images/H&M.jpg"
import img3 from "../assets/images/levis.jpg"
import img4 from "../assets/images/USPA.jpg"
import img5 from "../assets/images/puma.jpg"


export default function Brand() {
  return (
    <div>
        <BrandSection>
            <BrandBox>
                <TextBox>Top Brands Deal</TextBox>
                <Para>Up To <Span>60%</Span> off on brands</Para>
                <LogoBox>
                    <LogoDiv><Logo src={img1} alt="no-image" /></LogoDiv>
                    <LogoDiv><Logo src={img2} alt="no-image" /></LogoDiv>
                    <LogoDiv><Logo src={img3} alt="no-image" /></LogoDiv>
                    <LogoDiv><Logo src={img4} alt="no-image" /></LogoDiv>
                    <LogoDiv><Logo src={img5} alt="no-image" /></LogoDiv>
                </LogoBox>
            </BrandBox>
        </BrandSection>
    </div>
  )
}


const BrandSection = styled.div`
  margin: 50px;
  position: relative;
  max-width: 1350px;
  padding: 0 15px;
  @media screen and (max-width: 900px) {
      margin: 50px 40px;
  }
  @media screen and (max-width: 700px) {
      margin: 40px 30px;
  }
`
const BrandBox = styled.div`
    background-color: #3C4242;
    border-radius: 10px;
    text-align: center;
    justify-items: center;
    padding: 35px;
    margin: 10px;
    @media screen and (max-width: 1080px) {
      padding: 35px 10px;
    }
    @media screen and (max-width: 480px) {
      padding:15px 10px ;
    }
`
const TextBox = styled.h1`
    font-weight:bolder;
    color: #fff;
    @media screen and (max-width: 700px) {
      font-size: xx-large;
    }
    @media screen and (max-width: 480px) {
      font-size: x-large;
    }
`
const Para = styled.p`
    font-weight: 400;
    color: #fff;
    @media screen and (max-width: 700px) {
      font-size: medium;
    }
    @media screen and (max-width: 480px) {
      font-size: small;
    }

`
const Span = styled.span`
    color:#FBD103 ;
`
const LogoBox = styled.div`
    display: flex;
    gap: 15px;
    padding: 35px 5px 5px 5px;
    @media screen and (max-width: 1080px) {
      padding-top: 14px;
    }
    @media screen and (max-width: 900px) {
      padding-top: 10px;
    }
    @media screen and (max-width: 575px) {
      flex-wrap: wrap;
      justify-content: center;
    }
`
const LogoDiv = styled.div`
    background-color: #fff;
    padding: 8px;
    border-radius: 10px;
`

const Logo = styled.img`
    width:150px ;
    height: 70px;
    @media screen and (max-width: 1100px) {
      width: 130px;
    }
    @media screen and (max-width: 1080px) {
      width: 110px;
      height: 60px;
    }
    @media screen and (max-width: 900px) {
      width: 90px;
      height: 50px;
    }
    @media screen and (max-width: 800px) {
      width: 70px;
      height: 40px;
    }
    @media screen and (max-width: 700px) {
      width: 50px;
      height: 30px;
    }
`