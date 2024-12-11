import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Combos() {
  return (
    <div>
        <Navbar/>
        <Text>"No products found :("</Text>
        <Footer/>
    </div>
  )
}

const Text = styled.h1`
    margin-bottom: 12rem;
    margin-top: 5rem;
    text-align: center;
`