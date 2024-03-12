import styles from './style.module.css';
import React, { useEffect, useRef, useState } from 'react';
import logo from '../../img/logotip.png';
import videoMP4 from '../../video/6666.mp4'
import { Link, useNavigate } from 'react-router-dom';
import add_photo from '../../img/add-image.png'

function Head({ idProducts }) {
  const navigate = useNavigate();
  // Стейт для меню продуктов
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  // Стейт для меню отраслей
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  // Стейт для открытия модального окна
  const [openModal, setOpenModal] = useState(false);
  // Стейт для хранения фото перед отправкой
  const [photos, setPhotos] = useState([]);
  // Для закрытия окна при клике вне окна
  const modalRef = useRef();
  const productTitles = {
    1: { title: "УПАКОВКА", slogan: "Лучшие упаковочные решения" },
    2: { title: "ОТКРЫТКИ", slogan: "Индивидуальные открытки для ваших поздравлений" },
    3: { title: "БРЕНДИРОВАНИЕ", slogan: "Создаем уникальный бренд для вашего продукта" },
    4: { title: "СУВЕНИРЫ", slogan: "Оригинальные сувениры на любой вкус" },
    5: { title: "ЗНАЧКИ", slogan: "Качественные значки с вашим логотипом" },
    6: { title: "МЕДАЛИ", slogan: "Памятные медали для важных событий" }
  };
  const titleInfo = idProducts ? productTitles[idProducts] : { title: "СУВЕНИРНЫЙ ВЕКТОР", slogan: "Комплексный подход в разработке сувенирной продукции - делаем каждый момент запоминающимся" };
  // Наведение на ПРОДУКТЫ
  const handleProductsMouseEnter = () => {
    setIsProductsDropdownOpen(true);
  };
  const handleProductsMouseLeave = () => {
    setIsProductsDropdownOpen(false);
  };
  // Наведение на ОТРАСЛИ
  const handleIndustriesMouseEnter = () => {
    setIsIndustriesDropdownOpen(true);
  };
  const handleIndustriesMouseLeave = () => {
    setIsIndustriesDropdownOpen(false);
  };
  // Переход по продуктам
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  // Переход по отраслям
  const handleIndustryClick = (id) => {
    navigate(`/industry/${id}`);
  };
  // Открывает модальное окно
  const openModalClick = () => {
    setOpenModal(true);
  }
  // Закрывает модальное окно
  const closeModal = () => {
    setOpenModal(false);
  }
  // Закрывает модальное окно при клике за его пределами
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          closeModal();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [modalRef]);

  // Обработка файла (футер)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPhoto = {
          url: reader.result,
          file: file,
          type: 'image'
        };
        setPhotos([...photos, newPhoto]);
      };
      reader.readAsDataURL(file);
    } else if (file.type === 'application/pdf') {
      const newPdf = {
        url: URL.createObjectURL(file),
        file: file,
        type: 'pdf'
      };
      setPhotos([...photos, newPdf]);
    } else {
      alert('Пожалуйста, выберите изображение или PDF-файл.');
    }
  };
  // Удаление фото (футер)
  const handleRemovePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);

    // Очистка значения поля ввода типа "file"
    const fileInputs = document.querySelectorAll('input[type="file"]');
    if (fileInputs[index]) {
      fileInputs[index].value = '';
    }
  };
  // Клик по кнопке отправить (футер)
  const ClickSubmitForm = (event) => {
    const consentCheckbox = document.getElementById('consentCheckbox');
    if (!consentCheckbox.checked) {
      consentCheckbox.classList.add('blinking');
      setTimeout(() => {
        consentCheckbox.classList.remove('blinking');
      }, 2000);
      event.preventDefault();
    } else {
      // Отправка формы или другие действия
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header__top_content}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" /> 
          </Link>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>ГЛАВНАЯ</Link>
            <div 
              className={styles.link}
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}>
              ПРОДУКТЫ
              {isProductsDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <a onClick={() => handleProductClick(4)} className={styles.dropdownMenu_link}>Сувениры</a>
              <a onClick={() => handleProductClick(5)} className={styles.dropdownMenu_link}>Значки</a>
              <a onClick={() => handleProductClick(6)} className={styles.dropdownMenu_link}>Медали</a>
              <a onClick={() => handleProductClick(1)} className={styles.dropdownMenu_link}>Упаковка</a>
              <a onClick={() => handleProductClick(3)} className={styles.dropdownMenu_link}>Брендирование</a>
              <a onClick={() => handleProductClick(2)} className={styles.dropdownMenu_link}>Открытки</a>
            </div>
            )}
            </div>
            <div 
              className={styles.link}
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}>
              ОТРАСЛИ
              {isIndustriesDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a onClick={() => handleIndustryClick(1)} className={styles.dropdownMenu_link}>Правительство</a>
                <a onClick={() => handleIndustryClick(2)} className={styles.dropdownMenu_link}>Учебные заведения</a>
                <a onClick={() => handleIndustryClick(3)} className={styles.dropdownMenu_link}>Маркетинг</a>
                <a onClick={() => handleIndustryClick(4)} className={styles.dropdownMenu_link}>Мероприятие</a>
                <a onClick={() => handleIndustryClick(5)} className={styles.dropdownMenu_link}>Праздник</a>
                <a onClick={() => handleIndustryClick(5)} className={styles.dropdownMenu_link}>VIP подарки</a>
            </div>
            )}
            </div>
            <div onClick={openModalClick} className={styles.button_top}></div>
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
          <div onClick={openModalClick} className={styles.button_buttom}></div>
      </div>
      {openModal && (
        <div className={styles.modal} >
          <div className={styles.modalContent} ref={modalRef}>
            <form className={styles.modal_form}>
              <div className={styles.form_imputs_logo}>
                <img className={styles.logo_modal} src={logo} alt='logo'/>
                <span className={styles.form_title}>ФОРМА ОБРАТНОЙ СВЯЗИ</span>
              </div>
              <div className={styles.form_imputs}>
                <div className={styles.form_imput}>
                    <span>Имя</span>
                    <input className={styles.form_text} id="name" placeholder="Иван" type="text"></input>
                </div>
                <div className={styles.form_imput}>
                    <span>Фамилия</span>
                    <input className={styles.form_text} id="surname" placeholder="Иванов" type="text"></input>
                </div>
              </div>
                <div className={styles.form_imputs}>
                  <div className={styles.form_imput}>
                    <span>Эл.почта</span>
                    <input className={styles.form_text} id="email" placeholder="ivanov@gmail.com" type="email"></input>
                  </div>
                  <div className={styles.form_imput}>
                    <span>Телефон</span>
                    <input className={styles.form_text} id="tel" placeholder="8 (999) 999 99 99" type="tel"></input>
                  </div>
                </div>
                <div className={styles.form_imputs}>
                  <div className={styles.form_imput}>
                    <span>Дополнительная информация</span>
                    <textarea className={styles.form_textarea} id="message" placeholder="Введите текст"></textarea>
                  </div>
                </div>
                <div className={styles.form_imputs}>
                  <div className={styles.form_imput}>
                    <span>Выберите файлы</span>
                    <div className={styles.files}>
                    {photos.map((photo, index) => (
                        <div key={index}>
                          {photo.type === 'image' ? (
                            <div className={styles.delete_img}>
                              <img className={styles.add_img} src={photo.url} alt={`Photo ${index}`} />
                              <button className={styles.delete} onClick={() => handleRemovePhoto(index)}>УДАЛИТЬ</button>
                            </div>
                          ) : (
                            <div className={styles.delete_img}>
                              <object className={styles.file_obj} data={photo.url} type="application/pdf" ></object>
                              <button className={styles.delete} type="button" onClick={() => handleRemovePhoto(index)}>УДАЛИТЬ</button>
                            </div>
                          )}
                        </div>
                      ))}
                          {[...Array(Math.max(0, 4 - photos.length))].map((_, index) => (
                          <div key={index} title="Загрузите файлы, чтобы помочь нам понять ваши предпочтения">
                            <input 
                              type="file" 
                              accept="image/*,.pdf" 
                              onChange={handleImageUpload} 
                              style={{ display: 'none' }}
                            />
                            <label>
                              <img className={styles.add_img}
                                src={add_photo} 
                                alt="Добавить фото" 
                                onClick={() => document.querySelectorAll('input[type="file"]')[index].click()} 
                              />
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className={styles.form_imputs}>
                  <div className={styles.form_imput}>
                    <input className={styles.check_box} type="checkbox" id="consentCheckbox" required></input>
                  </div>
                  <div className={styles.form_imput}>
                    <div>Я согласен на обработку моих <br/><Link className={styles.personal}>персональных данных</Link></div>
                  </div>
                </div>
                <div className={styles.form_imputs}>
                  <div className={styles.form_imput}>
                    <button className={styles.button_modal_delete} type='reset'>УДАЛИТЬ</button>
                  </div>
                  <div className={styles.form_imput}>
                  <button className={styles.button_modal_add} type='submit'>ОТПРАВИТЬ</button>
                  </div>
                </div>
              <div className={styles.modal_form_button}>
              </div>
            </form>
          </div>
          <div className={styles.main_err_plase}>
          </div>
        </div>
      )}
    </div>
  );
}

export default Head;