import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Noproduct() {
  return (
    <>
    <Navbar/>
        <Text>"No products found :("</Text>
    </>
  )
}

const Text = styled.h1`
    margin: 50px 25px;
    text-align: center;
`