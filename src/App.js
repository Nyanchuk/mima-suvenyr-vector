import * as S from "./style";
import Head from './components/Head/index'

function App() {
  return (
    <div>
      <Head />
      <S.Wrapper>
        <S.Main>
          <S.MainInfo>О КОМПАНИИ:</S.MainInfo>
          <S.MainInfo_slogan>Мы, компания Сувенирный вектор, на сувенирном рынке более 20 лет. Основным направлением нашей деятельности является изготовление качественной сувенирной продукции, включающей в себя широкий ассортимент различных изделий от бюджетных промо-сувениров до изысканных подарков VIP-класса по индивидуальным заказам, а также эксклюзивные сувениры ручной работы.</S.MainInfo_slogan>
          <S.MainImgBottom>
            <S.Parallax>
              <S.MainParallax>
                <S.MainParallaxSlogan>Революция в процессе закупки знаков отличия во всем мире!</S.MainParallaxSlogan>
              </S.MainParallax>
            </S.Parallax>
            <S.MainBody>
              <S.MainInfo>ПОЧЕМУ НУЖНО ВЫБРАТЬ ИМЕННО НАС?</S.MainInfo>
              <S.MainWhy>
                <S.MainItems>
                  <S.MainItem></S.MainItem>
                  <S.MainItem></S.MainItem>
                  <S.MainItem></S.MainItem>
                  <S.MainItem></S.MainItem>
                  <S.MainItem></S.MainItem>
                </S.MainItems>
                <S.MainItemsTwo>
                  <S.MainItemText>Мы тщательно исследуем рынок и анализируем конкурентов, для нас важно всегда оставаться на первом месте!</S.MainItemText>
                  <S.MainItemText>Мы организуем контроль качества нашей продукции на каждом этапе производства!</S.MainItemText>
                  <S.MainItemText>Наша производственная площадка оснащена современным оборудованием, которое позволяет качественно и в срок изготавливать продукцию!</S.MainItemText>
                  <S.MainItemText>Для вашего удобства мы постоянно оптимизируем процессы производства и внедряем новые технологии!</S.MainItemText>
                  <S.MainItemText>Мы разрабатываем дизайн на основе последних тенденций!</S.MainItemText>
                </S.MainItemsTwo>
              </S.MainWhy>
              <S.HeaderLinkUs>СВЯЗАТЬСЯ С НАМИ</S.HeaderLinkUs>
            </S.MainBody>
          </S.MainImgBottom>
          <S.MainImgBottom>
            <S.Parallax>
              <S.MainParallax>
                <S.MainParallaxSlogan>Вы обязательно найдете у нас то, что вам нужно!</S.MainParallaxSlogan>
              </S.MainParallax>
            </S.Parallax>
            <S.MainBody>
              <S.MainInfo>КАК МЫ РАБОТАЕМ:</S.MainInfo>
  
            </S.MainBody>
          </S.MainImgBottom>
        </S.Main>
      </S.Wrapper>
    </div>
  );
}

export default App;
