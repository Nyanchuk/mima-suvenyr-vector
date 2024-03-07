import styled, { keyframes } from "styled-components";
import parallax from "../../img/img_66.webp";
import medal from "../../img/loon-image-original.jpeg";
import img1 from "../../img/5555.webp";
import img2 from "../../img/333344.webp";
import parts1 from "../../img/Parts/loon1.jpeg";
import parts2 from "../../img/Parts/loon2.jpg";
import parts3 from "../../img/Parts/loon3.jpg";
import parts4 from "../../img/Parts/loon4.jpg";
import parts5 from "../../img/Parts/loon5.jpg";
import parts6 from "../../img/Parts/66.jpg";

const swingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
`;
export const Wrapper = styled.div`
  height: auto;
`;
export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Main = styled.div`
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
export const Main_links = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fbc663ef;
  font-weight: 300;
  font-size: 24px;
  border-bottom: 1px solid #fbc663ef;
  border-top: 1px solid #fbc663ef;
`;
export const Main_link = styled.div`
  cursor: pointer;
  width: 350px;
  transition: all 0.3s;
  &:hover {
    color: #c59b4cee;
  }
`;
export const Section = styled.div`
  position: relative;
`;
export const Main_section_one = styled.div`
  height: 600px;
  width: 100%;
  opacity: 0.1;
  position: relative;
  z-index: -999;
  background-image: url(${medal});
  background-size: cover;
  background-position: center;
`;
export const Main_section_container = styled.div`
  position: absolute;
  z-index: 999;
  top: 50%; /* Положение блока относительно верхнего края */
  left: 50%; /* Положение блока относительно левого края */
  height: 420px;
  max-width: 900px;
  opacity: 1;
  transform: translate(
    -50%,
    -50%
  ); /* Центрирование блока по вертикали и горизонтали */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
export const Main_section_img = styled.div`
  height: 550px;
  width: 550px;
  background-image: url(${img1});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Main_section_title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  height: 450px;
  width: 450px;
  color: #fbc663ef;
  font-weight: 300;
  font-size: 32px;
`;
export const HeaderLinkUs = styled.div`
  cursor: pointer;
  border-radius: 30px;
  font-size: 16px;
  transition: all 0.3s;
  &::before {
    content: "СДЕЛАТЬ ЗАКАЗ";
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    background-image: linear-gradient(
        45deg,
        #c69230 20%,
        #fff9b2 50%,
        #ae792b 100%
      ),
      linear-gradient(45deg, #c69230 20%, #fff9b2 50%, #ae792b 100%);
    background-size: 200% 100%; /* Два слоя градиента */
    transition: background-position 0.3s;
    color: #1c160d;
    z-index: -1;
  }
  &:hover::before {
    background-position: 100% 0, 0 100%; /* Переключаемся между двумя слоями градиента */
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const Main_clientele = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  height: 240px;
  padding-top: 35px;
  background-color: #fdfdfd;
  color: #e8b75cee;
  font-weight: 400;
  font-size: 28px;
`;
export const Slice = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const Main_img = styled.img`
  height: 120px;
  background-size: contain;
  opacity: 0.75;
  display: block;
  margin: 0 auto;
  max-width: fit-content;
`;
export const Main_section_two = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;
export const Main_section_plus = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* Создаем 3 строки */
  grid-template-columns: repeat(3, 1fr); /* Создаем 2 столбца */
  gap: 30px;
`;
export const Main_plus_img = styled.img`
  width: 40px;
  height: auto;
`;
export const Main_plus_info = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fbc663;
  text-align: left;
`;
export const MainInfo = styled.div`
  color: #fdfdfd;
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 35px;
`;
export const MainInfo_slogan = styled.div`
  color: #ebebeb;
  font-weight: 300;
  font-size: 18px;
  padding-left: calc(50% - 500px);
  padding-right: calc(50% - 500px);
`;
export const MainParallax = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MainParallaxSlogan = styled.p`
  position: absolute;
  padding-bottom: 42px;
  max-width: 800px;
  text-align: center;
  padding-top: 18px;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
`;
export const MainImgBottom = styled.a`
  position: relative;
  width: 100%;
  height: auto;
  background-size: cover;
`;
export const Parallax = styled.div`
  background-image: url(${parallax});
  opacity: 0.9;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-bottom: 35px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: rgba(20, 34, 49, 0.686);
  }
`;
export const MainWhy = styled.div`
  padding-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 45px;
`;
export const MainItems = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
`;
export const ItemPount = styled.div`
  position: absolute;
  top: 39%;
  left: 52px;
  font-size: 26px;
  font-weight: 600;
  color: rgb(20, 34, 49);
`;
export const MainItemImg = styled.img`
  width: 450px;
  height: 170px;
  object-fit: cover;
  opacity: 0.9;
`;
export const MainItem = styled.img`
  margin-top: 10px;
  width: 120px;
  height: 120px;
  &:hover {
    animation: ${swingAnimation} 0.5s infinite alternate; /* Применяем анимацию при наведении */
  }
`;
export const MainItemText = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #fbc663ef;
  height: 30px;
  text-align: start;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 10px;
  border-bottom: 1px solid #fbc663ef;
  border-top: 1px solid #fbc663ef;
`;
export const MainItemTextInfo = styled.div`
  width: 330px;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 10px;
  color: #ffffffee;
  height: 30px;
  text-align: start;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 10px;
`;
// Картинки-ссылки (большие)
export const Main_Link_img = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  width: 100%;
  color: #fbc663ef;
  background-color: #fff;
  font-weight: 400;
  font-size: 28px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto; /* Определяем 2 строки */
  grid-template-columns: repeat(3, 1fr); /* Определяем 3 столбца */
  gap: 5px;
`;
export const Link__with_block = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  &.part_one {
    background-image: url(${parts1});
    background-size: cover;
  }
  &.medals {
    background-image: url(${parts6});
    background-size: cover;
  }
  &.part_two {
    background-image: url(${parts2});
    background-size: cover;
  }
  &.part_three {
    background-image: url(${parts3});
    background-size: cover;
  }
  &.part_four {
    background-image: url(${parts4});
    background-size: cover;
  }
  &.part_five {
    background-image: url(${parts5});
    background-size: cover;
  }
`;
export const WitchSpan = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  padding: 10px;
  font-size: 32px;
  color: #ffffffec;
  background-color: rgba(20, 34, 49, 0.398);
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    background-color: rgba(20, 34, 49, 0.685);
    text-shadow: 0 0 15px #000;
  }
`;
export const MainLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainLinkUs = styled.div`
  cursor: pointer;
  border-radius: 30px;
  font-size: 16px;
  transition: all 0.3s;
  &::before {
    content: "СДЕЛАТЬ ЗАКАЗ";
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    background-image: linear-gradient(
        45deg,
        #c69230 20%,
        #fff9b2 50%,
        #ae792b 100%
      ),
      linear-gradient(45deg, #c69230 20%, #fff9b2 50%, #ae792b 100%);
    background-size: 200% 100%; /* Два слоя градиента */
    transition: background-position 0.3s;
    color: #1c160d;
    z-index: -1;
  }
  &:hover::before {
    background-position: 100% 0, 0 100%; /* Переключаемся между двумя слоями градиента */
  }
  &:active {
    transform: scale(0.95);
  }
  /* &:hover {
        background-color: #c69130b0;
        border: 1px solid #c69130b0;
        box-shadow: 0 0 3px #c69130b0;
    }
    &:active {
        transform: scale(.95);
    } */
`;
// Вторая секция
export const SectionTwo = styled.div`
  position: relative;
`;
export const Main_sectionTwo = styled.div`
  height: 600px;
  width: 100%;
  opacity: 0.1;
  position: relative;
  z-index: -999;
  background-image: url(${medal});
  background-size: cover;
  background-position: center;
`;
export const Main_section_two_img = styled.div`
  height: 550px;
  width: 550px;
  background-image: url(${img2});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Main_bottom_text = styled.div`
  font-size: 52px;
  font-weight: bold;
  color: aliceblue;
  font-style: italic;
  padding-bottom: 25px;
`;
export const Main_section_titleTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 450px;
  color: #fbc663ef;
  font-weight: 300;
  font-size: 32px;
`;
