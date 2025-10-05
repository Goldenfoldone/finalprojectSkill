import styled from "styled-components"
import gal from "../assets/img/663fc453d66c8534250053c887c969f508e4c527.png"
import { MyButton } from "./Button"

const Main = styled.div<{ $color?: string }>`
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 2px solid ${p => p.$color || '#FFB64F'};
    width: 415px;
    height: 540px;

`    
const Osnova = styled.div<{ $color?: string }>`
    width: 415px;
    height: 132px;
    background-color: ${p => p.$color || '#FFB64F'};
    position: relative;
`
type NameCrad = {
    color?: string;
    left?: number;
    top?: number;
    size?: number;
    $inverse?: boolean;
}
const NameCrad = styled.p<NameCrad>`
    font-family: "Inter"; 
    font-weight: 500;
    font-size: ${props => (props.size ? `${props.size}px` : '30px')};
    color: ${props => (props.$inverse ? '#FFFFFF' : (props.color ? `${props.color}` : '#000000'))};
    margin: 0;
    padding-left: ${props => (props.left ? `${props.left}px` : '30px')};
    padding-top: ${props => (props.top ? `${props.top}px` : '30px')};
`

type Text = {
    left?: number;
    top?: number;
    $inverse?: boolean;
}
const Text = styled.p<Text>`
    font-family: "Inter"; 
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    color: ${props => (props.$inverse ? '#FFFFFF' : 'inherit')};
    padding-left: ${props => (props.left ? `${props.left}px` : '30px')};
    padding-top: ${props => (props.top ? `${props.top}px` : '0px')};
`
const ImgCard = styled.img`
    width: 92px;
    position: absolute;
    left: 307px;
    top: 20px; 
`
const PriceC = styled.div`
    display: flex;
    align-items: center;
`
const ImgPrice = styled.img`
    width: 20px;
    height: 20px;
`
const Punkt = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;
`
const Info = styled.div<{ $hasInstallment?: boolean }>`
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding-top: ${props => (props.$hasInstallment ? '59px' : '91px')};
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

type Plan = {
  title: string;
  subtitle?: string;
  price: string;
  oldPrice?: string;
  installment?: string;
  features: string[];
  iconSrc?: string;
    buttonText?: string;
    color?: string;
}

type Props = Plan;

export const PricePlanCard = ({ title, subtitle, price, oldPrice, installment, features, iconSrc, buttonText, color }: Props) => {
    const isBlack = (c?: string) => {
        if (!c) return false;
        const val = c.trim().toLowerCase();
        return val === '#000' || val === '#000000' || val === 'black';
    }
    const inverse = isBlack(color);
    return(
        <Main $color={color}>
            <Osnova $color={color}>
                <NameCrad $inverse={inverse}>{title}</NameCrad>
                {subtitle && <Text $inverse={inverse} top={10}>{subtitle}</Text>}
                {iconSrc && <ImgCard src={iconSrc} alt="icon" />}
            </Osnova>
            <PriceC>
                <NameCrad top={33}>{price}</NameCrad>
                {oldPrice && <NameCrad top={33} left={19} color="gray" size={25}><s>{oldPrice}</s></NameCrad>}
            </PriceC>
            {installment && <Text top={10}>{installment}</Text>}
            <Info $hasInstallment={!!installment}>
                <NameCrad size={20} top={0}>В тариф входит:</NameCrad>
                {features.map((f, i) => (
                  <Punkt key={i}><ImgPrice src={gal} alt="" /><Text left={8}>{f}</Text></Punkt>
                ))}
            </Info>
            <Btn>
                <MyButton 
                variant='contained'
                bgColor="#5970FF"
                fontSize={20}
                padding="18px 120px 17px 123px"
                textColor="#FFFFFF"
                >{buttonText || 'Подробнее'}</MyButton>
            </Btn>
        </Main>
    )
}

export default PricePlanCard;
