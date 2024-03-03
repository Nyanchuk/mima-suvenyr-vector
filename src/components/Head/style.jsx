import styled from 'styled-components';

export const Body = styled.div`
padding-top: 30px;
    position: relative;
`

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  video {
    position: absolute;
    z-index: -99;
    opacity: 0.4;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    object-fit: cover;
}
`;
export const BodyBurger = styled.div`
    margin: 0 auto; /* Центрирование содержимого */
    max-width: 1366px; /* Максимальная ширина 1366px */
    width: 100%; /* Чтобы контейнер занимал всю доступную ширину */
    padding: 0 40px; /* Добавление отступов для адаптации под меньшие экраны */
    box-sizing: border-box; /* Учитываем отступы в общую ширину */
    height: auto;
    display: flex;
    justify-content: center; /* Выравнивание содержимого по центру */
    align-items: center;
`;
export const BurgerTop = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`
export const HeaderImg = styled.img`
    width: 130px;
    height: 90px;
`
export const HeaderLink = styled.a`
    cursor: pointer;
    text-align: center;
    color: #fbc663ef;
    font-size: 20px;
    font-weight: 300;
    border: 1px solid transparent;
    box-shadow: 0 0 5px transparent;
    border-radius: 30px;
    padding: 10px;
    transition: all .3s;
    &:hover {
    color: #c59b4cee;
    }
`
export const BurgerTop2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`
export const HeaderLinkUs = styled.div`
    cursor: pointer;
    border-radius: 30px;
    font-size: 16px;
    transition: all .3s;
    &::before {
    content: "СВЯЗАТЬСЯ С НАМИ";
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
export const HeaderBottom = styled.div`
    margin-top: 20px;
    padding-bottom: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 45px;
    height: auto;
    /* background: linear-gradient(to bottom, rgba(229, 205, 107, 0), rgba(255, 202, 10, 0), rgba(255, 202, 10, 0), rgba(20, 34, 49, 0.283), rgb(20, 34, 49)); */
`
export const HeaderSlogan = styled.p`
    font-weight: 300;
    max-width: 700px;
    font-size: 18px;
    color: #e5e5e5;
`
export const HeaderTitle = styled.div`
font-weight: 500;
font-size: 64px;
padding: 15px;
position: relative;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid transparent;
  background-image: 
    linear-gradient(45deg, #c69230 20%, #fff9b2 50%, #ae792b 100%),
    linear-gradient(45deg, #c69230 20%, #fff9b2 50%, #ae792b 100%);
  background-size: 200% 100%; /* Два слоя градиента */
  transition: background-position 0.3s; /* Добавляем переход для плавного изменения градиента */
  z-index: -1;
} 

&:hover::before {
  background-position: 100% 0, 0 100%; /* Переключаемся между двумя слоями градиента */
}
`;
export const Images = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 7px;
    height: 50px;
    width: 250px;
`
export const HeaderContact = styled.img`
    cursor: pointer;
    transition: all .3s;
    width: 50px;
    height: 50px;
    border: 1px solid transparent;
    box-shadow: 0 0 3px transparent;
    border-radius: 20px;
    &:hover {
        transform: scale(1.1);
        border: 1px solid #c69130f0;
        border-radius: 20px;
        background-color: #c69130f0;
    }
    &:active {
        transform: scale(1);
    }
`
