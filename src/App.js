import * as S from "./style";
import Head from './components/Head/index'
import dv from './img/clients/1.svg.png'
import vl from './img/clients/2.svg.png'
import tr from './img/clients/3.svg.png'
import cr from './img/clients/4.png'
import sr from './img/clients/4.jpeg'
import five from './img/clients/5.png'
import six from './img/clients/6.png'
import seven from './img/clients/777.png'
import eght from './img/clients/88.png'
import nine from './img/clients/99.jpeg'
import ten from './img/clients/10.png'
import elvn from './img/clients/11.jpeg'
import tvlv from './img/clients/12.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  // В вашем компоненте
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false 
};
  return (
    <div>
      <Head />
      <S.Wrapper>
        <S.Main>
          <S.Main_links>
            <S.Main_link>СУВЕНИРЫ</S.Main_link>
            <S.Main_link>ЗНАКИ ОТЛИЧИЯ</S.Main_link>
            <S.Main_link>МЕДАЛИ</S.Main_link>
          </S.Main_links>
          {/* Блок с картинкой */}
          <S.Section>
            <S.Main_section_one></S.Main_section_one>
            <S.Main_section_container>
              <S.Main_section_img></S.Main_section_img>
              <S.Main_section_title>
                <div>Сделайте так, чтобы ваши награды вызывали эмоции у людей</div>
                <S.HeaderLinkUs></S.HeaderLinkUs>
              </S.Main_section_title>
            </S.Main_section_container>
          </S.Section>

          <S.Main_clientele>
            <div>СРЕДИ НАШИХ ЗАКАЗЧИКОВ ВЫ МОЖЕТЕ УВИДЕТЬ:</div>
            <S.Slice>
            <Slider {...settings}>
              <div><S.Main_img src={five} /></div>
              <div><S.Main_img src={vl} /></div>
              <div><S.Main_img src={elvn} /></div>
              <div><S.Main_img src={tr} /></div>
              <div><S.Main_img src={cr} /></div>
              <div><S.Main_img src={dv} /></div>
              <div><S.Main_img src={sr} /></div>
              <div><S.Main_img src={six} /></div>
              <div><S.Main_img src={seven} /></div>
              <div><S.Main_img src={eght} /></div>
              <div><S.Main_img src={nine} /></div>
              <div><S.Main_img src={ten} /></div>
              <div><S.Main_img src={tvlv} /></div>
            </Slider>
            </S.Slice>
          </S.Main_clientele>
          
          
          <S.MainImgBottom>
            <S.Parallax>
              <S.MainParallax>
                <S.Main_section_two>
                <S.MainInfo>Сотрудничая с СУВЕНИРНЫМ ВЕКТОРОМ, <span style={{ color: '#fbc663ef',fontWeight:'bold' }}>вы получаете:</span></S.MainInfo>
                <S.Main_section_plus>
                  
                </S.Main_section_plus>
                {/* <S.MainInfo_slogan>Мы, компания Сувенирный вектор, на сувенирном рынке более 20 лет. Основным направлением нашей деятельности является изготовление качественной сувенирной продукции, включающей в себя широкий ассортимент различных изделий от бюджетных промо-сувениров до изысканных подарков VIP-класса по индивидуальным заказам, а также эксклюзивные сувениры ручной работы.</S.MainInfo_slogan> */}
                <S.HeaderLinkUs></S.HeaderLinkUs>
                </S.Main_section_two>
              
                {/* <S.MainParallaxSlogan>Революция в процессе закупки знаков отличия во всем мире!</S.MainParallaxSlogan> */}
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
