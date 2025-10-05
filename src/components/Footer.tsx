import styled from "styled-components"
import logo from "../assets/img/logo_proz.png"

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #029491;
    padding-left: 60px;
    padding-right: 45px;
`
const MyImg = styled.img`
    height: 137px;
`
const DivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 25px;
    gap: 21px;
`

const OsnovaText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
type TextProps = {
    size?: number;
}

const Text = styled.p<TextProps>`
    font-family: "Inter";
    font-weight: 400;
    font-size: ${props => (props.size ? `${props.size}px` : '14px')};
    margin: 0;  
    color: #FFFFFF;
`;


export const Footer = () => {
    return(
        <Main>
            <MyImg src={logo} alt="Прозрачный логотип СКАН"/>
            <DivText>
                <OsnovaText>
                    <Text size={14}>г. Москва, Цветной б-р, 40</Text>
                    <Text size={14}>+7 495 771 21 11</Text>
                    <Text size={14}>info@skan.ru</Text>
                </OsnovaText>
                <Text size={12}>Copyright. 2022</Text>
            </DivText>
            
        </Main>
    )
}