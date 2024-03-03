import styled from "styled-components";
import parallax from "./img/img:66.svg";
import medal from './img/loon-image-original.jpeg';
import img1 from './img/3PPL_GRP-b1263dab.webp'

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
  /* max-width: 1366px; */
  /* padding: 20px; */
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
    transform: translate(-50%, -50%); /* Центрирование блока по вертикали и горизонтали */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;
export const Main_section_img = styled.div`
    height: 420px;
    width: 450px;
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
`
export const HeaderLinkUs = styled.div`
    cursor: pointer;
    border-radius: 30px;
    font-size: 16px;
    transition: all .3s;
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
    background-image: 
      linear-gradient(45deg, #c69230 20%, #fff9b2 50%, #ae792b 100%),
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
    transform: scale(.95);
}
    /* &:hover {
        background-color: #c69130b0;
        border: 1px solid #c69130b0;
        box-shadow: 0 0 3px #c69130b0;
    }
    &:active {
        transform: scale(.95);
    } */
`
export const Main_clientele = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 100%;
    height: 300px;
    padding-top: 35px;
    background-color: #fdfdfd;
    color: #e8b75cee;
    font-weight: 400;
    font-size: 28px;
`;
export const Slice = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
export const Main_img = styled.img`
    height: 150px;
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
    gap: 35px;
`
export const Main_section_plus = styled.div`
    
`

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
  height: 700px;
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
  display: flex;
  justify-content: center;
  gap: 45px;
`;
export const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
export const MainItemsTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
export const MainItem = styled.div`
  margin-top: 10px;
  width: 30px;
  height: 30px;

  /* background-color: #fbc663ef;
    border: 1px solid #fbc663ef; */
  border-radius: 30px;
`;
export const MainItemText = styled.div`
  width: 750px;
  color: #fbc663ef;
  height: 30px;
  text-align: start;
  font-weight: 300;
  font-size: 18px;
  margin-top: 10px;
`;
// export const HeaderLinkUs = styled.div`
//   cursor: pointer;
//   margin-top: 35px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 170px;
//   height: 45px;
//   background-color: #d6a40f;
//   border: 1px solid #d6a40f;
//   border-radius: 25px;
//   color: rgb(28, 37, 47);
//   font-size: 14px;
//   font-weight: 500;
//   transition: all 0.3s;
//   &:hover {
//     color: rgb(28, 37, 47);
//     background-color: #ebebeb;
//     border: 1px solid #ebebeb;
//     box-shadow: 0 0 10px #ebebeb;
//   }
// `;
