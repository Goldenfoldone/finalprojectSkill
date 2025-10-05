import React from 'react'
import HomeContent from '../components/HomeContent'
import styled from 'styled-components'
import { SliderMaket } from '../components/Slider'
import Plag from '../assets/img/plugHome.png'
import { PricePlan } from '../components/PricPlan'

const Main = styled.div`
    margin-left: 60px;
`
const Img = styled.img`
  width: 1307px;
  margin-bottom: 108px;
`

export const Home: React.FC = () => {
  return( 
    <Main>
        <HomeContent />
        <SliderMaket/>
        <Img src={Plag} alt="Плаг" />
        <PricePlan/>
    </Main>
  )
}

export default Home