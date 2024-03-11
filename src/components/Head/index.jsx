import styles from './style.module.css';
import React from 'react';
import logo from '../../img/лого 3.png';
import videoMP4 from '../../video/Мой фильм 2.mp4'
import { Link, useNavigate } from 'react-router-dom';

function Head({ idProducts }) {
  const navigate = useNavigate();
  const productTitles = {
    1: { title: "УПАКОВКА", slogan: "Лучшие упаковочные решения" },
    2: { title: "ОТКРЫТКИ", slogan: "Индивидуальные открытки для ваших поздравлений" },
    3: { title: "БРЕНДИРОВАНИЕ", slogan: "Создаем уникальный бренд для вашего продукта" },
    4: { title: "СУВЕНИРЫ", slogan: "Оригинальные сувениры на любой вкус" },
    5: { title: "ЗНАЧКИ", slogan: "Качественные значки с вашим логотипом" },
    6: { title: "МЕДАЛИ", slogan: "Памятные медали для важных событий" }
  };
  const titleInfo = idProducts ? productTitles[idProducts] : { title: "СУВЕНИРНЫЙ ВЕКТОР", slogan: "Комплексный подход в разработке сувенирной продукции" };

  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header__top_content}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" /> 
          </Link>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>ГЛАВНАЯ</Link>
            <a className={styles.link}>ПРОДУКТЫ</a>
            <a className={styles.link}>ОТРАСЛИ</a>
            <div className={styles.button_top}></div>
          </div>
        </div>
      </div>
      <div className={styles.header_video}>
        <video className={styles.video} id="my-video" autoPlay muted loop width="100%" height="100%">
          <source src={videoMP4} type="video/mp4" />
        </video>
      </div>
      <div className={styles.header__bottom}>
        <div className={styles.header__title}>{titleInfo.title}</div>
        <div className={styles.slogan}>{titleInfo.slogan}</div>
        <div className={styles.button_top}></div>
      </div>
    </div>
  );
}

export default Head;