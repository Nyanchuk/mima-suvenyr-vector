import * as S from "./style";
import React  from 'react';
import { useState } from "react";
import add_photo from '../../img/add-image.png';
import logo from '../../img/logotip.png';

function FooterBlock() {
  // Стейт для хранения фото перед отправкой
  const [photos, setPhotos] = useState([]);
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
    <div>
            <S.Footer>
              <S.Form>
                <S.footerTitle>ВСЕ ЕЩЕ СОМНЕВАЕТЕСЬ? </S.footerTitle>
                <S.footerMassage>
                  <S.footerImg className="footer-one"/>
                  <S.Contacts>
                    <span>Задайте вопрос</span>
                    <span style={{ color: 'aliceblue', fontSize: '14px', fontWeight: '400' }}>sv428726@mail.ru</span>
                  </S.Contacts>
                </S.footerMassage>
                <S.footerMassage>
                  <S.footerImg className="footer-two"/>
                  <S.Contacts>
                  <span>Поговорите с нами</span>
                  <span style={{ color: 'aliceblue', fontSize: '14px', fontWeight: '400' }}>8 (914) 772 31 30</span>
                  </S.Contacts>
                  
                </S.footerMassage>
                <S.footerMassage>
                  <S.footerImg className="footer-three"/>
                  <S.Contacts>
                  <span>Напишите нам</span>
                  <S.Message>
                    <S.footerImgMessage className="whatsapp" href="https://wa.me/79147723130?text=Здравствуйте,%20"/>
                    <S.footerImgMessage className="telegramm" href="https://t.me/Suvenirnii_vector"/>
                    <S.footerImgMessage className="vk" href="https://vk.com/s_vektor_27"/>
                    <S.footerImgMessage className="instagramm" href="https://instagram.com/s_vektor27?igshid=hsy8plihxfwb"/>
                  </S.Message>
                  </S.Contacts>
                </S.footerMassage>
                <S.footerMassage>
                  <S.footerImg className="footer-fore"/>
                  <S.Contacts>
                  <span>Найдите нас</span>
                  <span style={{ color: 'aliceblue', fontSize: '14px', fontWeight: '400',textAlign: 'start' }}>Хабаровск, ул. Горького 57 А, литер В</span>
                  </S.Contacts>
                </S.footerMassage>
                <S.Confedention>Мы ценим вашу конфиденциальность. СУВЕНИРНЫЙ ВЕКТОР использует предоставленные вами данные, чтобы связаться с вами относительно вашего заказа. Дополнительную информацию можно найти в нашей <a style={{ textDecoration: 'underline'}}>Политике конфиденциальности.</a> </S.Confedention>
              </S.Form>
              <S.Form>
                <S.FormInputs>
                <S.ImputOne_contein_logo>
                    <span style={{ color: 'rgb(20, 34, 49)', fontWeight:'600', fontSize: '24px' }}>ФОРМА ОБРАТНОЙ СВЯЗИ</span>
                  </S.ImputOne_contein_logo>
                  <S.ImputOne_contein>
                    <S.ImputOne>
                    <span>Имя</span>
                    <S.InputItem id="name" placeholder="Иван" type="text"></S.InputItem>
                    </S.ImputOne>
                    <S.ImputOne>
                    <span>Фамилия</span>
                    <S.InputItem id="surname" placeholder="Иванов" type="text"></S.InputItem>
                    </S.ImputOne>
                  </S.ImputOne_contein>
                  <S.ImputOne_contein>
                    <S.ImputOne>
                    <span>Эл. почта</span>
                    <S.InputItem id="email" placeholder="ivanov@gmail.com" type="email"></S.InputItem>
                    </S.ImputOne>
                    <S.ImputOne>
                    <span>Телефон</span>
                    <S.InputItem id="tel" placeholder="8 (999) 999 99 99" type="tel"></S.InputItem>
                    </S.ImputOne>
                  </S.ImputOne_contein>
                  <S.ImputOne_contein>
                    <S.ImputOne>
                    <span>Введите дополнительную информацию</span>
                    <S.Textarea id="message" placeholder="Введите текст"></S.Textarea>
                    </S.ImputOne>
                  </S.ImputOne_contein>
                  <S.ImputOne_contein>
                    <S.ImputOne>
                    <span>Выберите файлы</span>
                      <S.ImputTwo>
                      {photos.map((photo, index) => (
                        <div key={index}>
                          {photo.type === 'image' ? (
                            <S.DeleteImg>
                              <S.AddImg src={photo.url} alt={`Photo ${index}`} />
                              <S.ButtonDeleteImg onClick={() => handleRemovePhoto(index)}>УДАЛИТЬ</S.ButtonDeleteImg>
                            </S.DeleteImg>
                          ) : (
                            <S.DeleteImg>
                              <S.Object data={photo.url} type="application/pdf" ></S.Object>
                              <S.ButtonDeleteImg type="button" onClick={() => handleRemovePhoto(index)}>УДАЛИТЬ</S.ButtonDeleteImg>
                            </S.DeleteImg>
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
                              <S.AddImg 
                                src={add_photo} 
                                alt="Добавить фото" 
                                onClick={() => document.querySelectorAll('input[type="file"]')[index].click()} 
                              />
                            </label>
                          </div>
                        ))}
                      </S.ImputTwo>
                    </S.ImputOne>
                  </S.ImputOne_contein>
                  <S.ImputOne_contein>
                    <S.ImputOne>
                      <S.CheckBox type="checkbox" id="consentCheckbox" required/>
                    </S.ImputOne>
                    <S.ImputOne>
                      <S.FooterConcent htmlFor="consentCheckbox">Я согласен на обработку моих <S.PersonalInfo id="personalDataText"> персональных данных</S.PersonalInfo ></S.FooterConcent>
                    </S.ImputOne>
                  </S.ImputOne_contein>
                  <S.ImputOne_contein>
                    <S.ImputOne>
                    <S.FooterDelete type="reset" ></S.FooterDelete>
                    </S.ImputOne>
                    <S.ImputOne>
                    <S.BottomLinkUs type='submit' onClick={ClickSubmitForm}></S.BottomLinkUs>
                    </S.ImputOne>
                  </S.ImputOne_contein>
                </S.FormInputs>
              </S.Form>
            </S.Footer>
          </div>
  );
}

export default FooterBlock;