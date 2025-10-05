import React from 'react';
import styled from 'styled-components'
import { CapitalText } from '../styles/global'
import HomePeople from "../assets/img/HomePeapel.png"
import { MyButton } from "./Button"

const Text = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 70px;
`

const Img = styled.img`
    position: absolute;
    width: 629px;
    top: 117px;
    z-index: -1;
    right: 60px;
`
const Width = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    right: 90px;
    top: 117px;
`

export const HomeContent: React.FC = () => {
    return(
    <>
        <CapitalText>
            сервис по поиску <br />публикаций<br /> о компании <br />по его ИНН
        </CapitalText>
        <Text>Комплексный анализ публикаций, получение данных <br /> в формате PDF на электронную почту.</Text>
        <Img src={HomePeople} alt="Люди"/>
        <Width></Width>
        <MyButton 
        variant='contained'
        bgColor="#5970FF"
        fontSize={22}
        padding="14px 64px 18px 63px"
        >Запросить данные</MyButton>
    </>
    )
}

export default HomeContent
