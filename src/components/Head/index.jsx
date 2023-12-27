import * as S from "./style";
import logo from '../../img/Business_Delivery_Logo —_копия-transformed.png'; // Path to your image
import Whatsapp from '../../img/whatsapp-rbxF_O0J3-transformed.png';
import Telegram from '../../img/telegram-transformed.png';
import Vk from '../../img/vk-aUz8tQfdS-transformed.png';
import Insta from '../../img/insta-transformed.png';
import videoMP4 from '../../video/Main4.mp4'

function Head() {
  return (
    <S.Body>
      <S.VideoWrapper>
          <video autoPlay muted loop width="100%" height="100%">
            <source src={videoMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </S.VideoWrapper>
      <S.BodyBurger>
        <S.HeaderImg src={logo} alt="logo" />
        <S.BurgerTop>
          <S.HeaderLink to="/">ГЛАВНАЯ</S.HeaderLink>
          <S.HeaderLink to="/products">ПРОДУКТЫ</S.HeaderLink>
          <S.HeaderLink to="/packing">УПАКОВКА</S.HeaderLink>
          <S.HeaderLink to="/brand">БРЕНДИРОВАНИЕ</S.HeaderLink>
          <S.HeaderLink to="/vip">VIP-ПОДАРКИ</S.HeaderLink>
          <S.HeaderLinkUs>СВЯЗАТЬСЯ С НАМИ</S.HeaderLinkUs>
        </S.BurgerTop>
      </S.BodyBurger>
      <S.HeaderBottom>
        <S.HeaderTitle>СУВЕНИРНЫЙ ВЕКТОР</S.HeaderTitle>
        <S.HeaderSlogan>Комплексный подход в разработке сувенирной продукции</S.HeaderSlogan>
        <S.Images>
          <S.HeaderContact src={Whatsapp} alt="Whatsapp" ></S.HeaderContact>
          <S.HeaderContact src={Telegram} alt="Telegram" ></S.HeaderContact>
          <S.HeaderContact src={Vk} alt="Vk" ></S.HeaderContact>
          <S.HeaderContact src={Insta} alt="Insta" ></S.HeaderContact>
        </S.Images>
      </S.HeaderBottom>
    </S.Body>
  );
}

export default Head;