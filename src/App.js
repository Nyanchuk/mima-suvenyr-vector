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
import manager from './img/plus/casino-manager.png'
import plan from './img/plus/action-plan.png'
import design from './img/plus/project.png'
import setting from './img/plus/settings.png'
import control from './img/plus/quality-control.png'
import opinion from './img/plus/opinion.png'
import medal_point from './img/medal.png'
import laser from './img/plus/three-friends-reading-from-books-notebook-library.jpg'
import desin from './img/plus/loon-image-original (1).jpeg'
import even from './img/plus/loon-image-high (1).jpeg'
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
                  <S.Main_plus_info>
                    <S.Main_plus_img src={manager}></S.Main_plus_img>
                    <div>Персональное сопровождение при оформлении заказа</div>
                  </S.Main_plus_info>
                  <S.Main_plus_info>
                    <S.Main_plus_img src={design}></S.Main_plus_img>
                    <div>Возможность выбора из ассортимента оригинальной продукции</div>
                  </S.Main_plus_info>
                  <S.Main_plus_info>
                    <S.Main_plus_img src={setting}></S.Main_plus_img>
                    <div>Партнера, постоянно оптимизирующего процессы производства и технологию</div>
                  </S.Main_plus_info>
                  <S.Main_plus_info>
                    <S.Main_plus_img src={plan}></S.Main_plus_img>
                    <div>Неограниченные варианты дизайна, подходящего вашему бренду</div>
                  </S.Main_plus_info>
                  <S.Main_plus_info>
                    <S.Main_plus_img src={control}></S.Main_plus_img>
                    <div>Партнера, гарантирующего высокое качество товара в установленные сроки</div>
                  </S.Main_plus_info>
                  <S.Main_plus_info>
                    <S.Main_plus_img src={opinion}></S.Main_plus_img>
                    <div>Качество, проверенное нашими многочисленными клиентами</div>
                  </S.Main_plus_info>
                </S.Main_section_plus>
                {/* <S.MainInfo_slogan>Мы, компания Сувенирный вектор, на сувенирном рынке более 20 лет. Основным направлением нашей деятельности является изготовление качественной сувенирной продукции, включающей в себя широкий ассортимент различных изделий от бюджетных промо-сувениров до изысканных подарков VIP-класса по индивидуальным заказам, а также эксклюзивные сувениры ручной работы.</S.MainInfo_slogan> */}
                <S.HeaderLinkUs></S.HeaderLinkUs>
                </S.Main_section_two>
              
                {/* <S.MainParallaxSlogan>Революция в процессе закупки знаков отличия во всем мире!</S.MainParallaxSlogan> */}
              </S.MainParallax>
            </S.Parallax>
            <S.MainBody>
              <S.MainInfo>Наша проверенная <span style={{ color: '#fbc663ef',fontWeight:'bold' }}>методология успеха</span> включает 3 шага:</S.MainInfo>
              <S.MainWhy>
                <S.MainItems>
                  <S.MainItem src={medal_point}/>
                  <S.ItemPount>1</S.ItemPount>
                  <div>
                    <S.MainItemText>КОНЦЕПТУАЛИЗАЦИЯ</S.MainItemText>
                    <S.MainItemTextInfo>Положитесь на более чем 20-летний опыт! Мы внимательно прорабатываем концепцию каждого сувенира, чтобы он соответствовал вашим ожиданиям и требованиям.</S.MainItemTextInfo>
                  </div>
                  
                  <S.MainItemImg src={laser}></S.MainItemImg>
                </S.MainItems>
                <S.MainItems>
                  <S.MainItem src={medal_point}/>
                  <S.ItemPount>2</S.ItemPount>
                  <div>
                    <S.MainItemText>ВОПЛОЩЕНИЕ ИДЕИ</S.MainItemText>
                    <S.MainItemTextInfo>Наши опытные дизайнеры готовы воплотить вашу уникальную идею в оригинальный и качественный сувенир, который будет радовать вас и ваших клиентов</S.MainItemTextInfo>
                  </div>
                  
                  <S.MainItemImg src={desin}></S.MainItemImg>
                </S.MainItems>
                <S.MainItems>
                  <S.MainItem src={medal_point}/>
                  <S.ItemPount>3</S.ItemPount>
                  <div>
                  <S.MainItemText>ПАМЯТНОЕ СОБЫТИЕ</S.MainItemText>
                    <S.MainItemTextInfo>Каждый созданный нами сувенир станет значимым символом вашего важного события или мероприятия, добавляя яркие воспоминания и эмоции в этот особенный день.</S.MainItemTextInfo>
                  </div>
                  <S.MainItemImg src={even}></S.MainItemImg>
                </S.MainItems>
                <S.MainItemsTwo>
                  
                  
                </S.MainItemsTwo>
              </S.MainWhy>
              <S.HeaderLinkUs></S.HeaderLinkUs>
            </S.MainBody>
          </S.MainImgBottom>
        </S.Main>
      </S.Wrapper>
    </div>
  );
}

export default App;
