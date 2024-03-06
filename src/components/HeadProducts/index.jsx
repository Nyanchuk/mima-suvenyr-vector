import * as S from "./style";
import React from 'react';
import logo from '../../img/лого 3.png';

import { useNavigate } from "react-router-dom";


function HeadProduct({ idProducts }) {
    const navigate = useNavigate();
    const productTitles = {
        1: "УПАКОВКА",
        2: "ОТКРЫТКИ",
        3: "БРЕНДИРОВАНИЕ",
        4: "СУВЕНИРЫ",
        5: "ЗНАЧКИ",
        6: "МЕДАЛИ"
      };
      const title = productTitles[idProducts];
  return (
    <S.Body>
      <S.VideoWrapper>
        {/* <video  id="my-video" autoPlay muted loop width="100%" height="100%">
          <source src={videoMP4} type="video/mp4" />
        </video> */}
      </S.VideoWrapper>
      <S.BodyBurger>
        <S.HeaderImg src={logo} alt="logo" onClick={() => navigate('/')}/>
        <S.BurgerTop>
          <S.BurgerTop2>
            <S.HeaderLink onClick={() => navigate('/')}>ГЛАВНАЯ</S.HeaderLink>
          </S.BurgerTop2>
        </S.BurgerTop>
      </S.BodyBurger>
      <S.HeaderBottom>
      <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderSlogan>Комплексный подход в разработке сувенирной продукции</S.HeaderSlogan>
      </S.HeaderBottom>
    </S.Body>
  );
}

export default HeadProduct;