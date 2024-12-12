import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spotlight from '../components/Spotlight';
import styled from 'styled-components';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import Brand from '../components/Brand';
import Feedback from '../components/Feedback';
import Arrival from '../components/Arrival';
import MenCategory from '../components/Men';
import WomenCategory from '../components/Women';
import LimeLight from '../components/Limelight';



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Spotlight/>
      <Cards/>
      <Arrival/>
      <Banner/>
      <MenCategory/>
      <WomenCategory/>
      <Brand/>
      <LimeLight/>
      <Feedback/>
      <Footer/>
    </div>
  )
}





