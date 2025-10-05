import styled from "styled-components";
import { CapitalText } from "../styles/global"
import Slider from "react-slick";
import prevNext from "../assets/img/prev_next.png";
import iconTime from '../assets/img/icon1.png'
import iconSearch from '../assets/img/icon2.png'
import iconDefense from '../assets/img/icon3.png'

const MainCarusel = styled(Slider)`
  position: relative; /* for side fade overlays */
  margin-left: 60px;
  width: 90%;
  margin-top: 70px;
  padding-top: 10px;
  margin-bottom: 70px;
  background: transparent;
  border: none;
  .slick-prev, .slick-next {
    width: 39px;
    height: 39px;
    z-index: 2;
    background-image: url(${prevNext});
    background-repeat: no-repeat;
    background-size: 96px 48px; 
  }

    .slick-slide{
        height: 300px;
    }
  .slick-prev:before, .slick-next:before {
    display: none;
  }

  .slick-prev {
    left: -60px;
    background-position: -48px -5px;
    transform: translateY(-50%) rotate(180deg);
  }

  .slick-next {
    right: -50px;
    background-position: -48px -10px;
  }
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 48px; /* fade width, adjust if needed */
    pointer-events: none;
    z-index: 1; /* below arrows (which are z-index:2) */
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, var(--page-bg, #ffffff) 0%, rgba(255,255,255,0) 60%);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, var(--page-bg, #ffffff) 0%, rgba(255,255,255,0) 60%);
  }
  /* top fade inside the visible track to hide hard top border */
  .slick-list {
    position: relative;
  }
  .slick-list::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 18px; /* height of top fade */
    pointer-events: none;
    z-index: 1;
    background: linear-gradient(to bottom, var(--page-bg, #ffffff) 0%, rgba(255,255,255,0) 100%);
  }
`
const ElementCarusel = styled.div`
    width: 400px !important;
    height: 225px ;
    background: #ffffff;
    border-radius: 12px;
    padding: 30px 20px;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow:
      0px 10px 30px rgba(0, 0, 0, 0.2),
      0px 4px 12px rgba(0, 0, 0, 0.2);
    border: none;
    background-clip: padding-box;
    
`
const ElementImg = styled.div<{ $src: string }>`
  width: 64px;
  height: 64px;
  margin-bottom: 19px;
  background-color: #029491; /* icon color */
  display: block;
  -webkit-mask-image: url(${p => p.$src});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  mask-image: url(${p => p.$src});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`

const ElementText = styled.p`
  margin: 0 0 ;
`
const Massiv = [
  {
  img: iconTime,
  text:'Высокая и оперативная скорость обработки заявки'
  },
  {
  img: iconSearch,
  text:'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
  },
  {
  img: iconDefense,
  text:'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  },
  {
  img: iconTime,
  text:'Высокая и оперативная скорость обработки заявки'
  },
  {
  img: iconSearch,
  text:'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
  },
  {
  img: iconDefense,
  text:'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  }
]

export const SliderMaket = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    return(
        <>
        <CapitalText size={45}>Почему именно мы</CapitalText>
         
      <MainCarusel {...settings}>
        {Massiv.map((item, index) => {
          return (<ElementCarusel key={index}>
            <ElementImg $src={item.img} aria-hidden />
            <ElementText>{item.text}</ElementText>
          </ElementCarusel>)
        })}
      </MainCarusel>
        </>
    )
}