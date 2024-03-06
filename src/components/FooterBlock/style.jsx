import styled, { keyframes } from "styled-components";
import footer1 from "../../img/footer/email.png";
import footer2 from "../../img/footer/mobile-phone.png";
import footer3 from "../../img/footer/voice-message.png";
import footer4 from "../../img/footer/map.png";
import whatsapp from "../../img/footer/whatsapp.png";
import telegramm from "../../img/footer/telegram-transformed.png";
import vk from "../../img/footer/vk.png";
import instagramm from "../../img/footer/insta-transformed.png";

const blinkAnimation = keyframes`
  0% { background-color: transparent }
  50% {  background-color: #fbc66388; border: 1px solid #fbc66388}
  100% {  background-color: transparent }
`;
export const Footer = styled.div`
  padding-top: 45px;
  padding-bottom: 45px;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 90px;
  color: #fbc663ef;
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;
export const FormInputs = styled.form`
  background-color: aliceblue;
  border-radius: 20px;
  color: rgb(20, 34, 49);
  padding: 35px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 35px;
  font-size: 18px;
`;
export const ImputOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const ImputOne_contein = styled.div`
  display: flex;
  gap: 35px;
`;
export const InputItem = styled.input`
  outline: none;
  font-family: Montserrat;
  margin-top: 5px;
  width: 180px;
  height: auto;
  padding: 8px;
  color: rgb(20, 34, 49);
  font-weight: 300;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid rgb(20, 34, 49);
  background-color: transparent;
  &::placeholder {
    color: rgba(20, 34, 49, 0.6);
    font-size: 16px;
    font-weight: 100px;
  }
`;
export const Textarea = styled.textarea`
  margin-top: 15px;
  width: 420px;
  resize: none;
  height: 80px;
  background-color: rgba(20, 34, 49, 0.1);
  border: 1px solid transparent;
  padding: 5px;
  color: rgb(20, 34, 49);
  font-family: Montserrat;
  font-size: 16px;
  scrollbar-width: thin;
  border-bottom: 1px solid rgb(20, 34, 49);
  scrollbar-color: rgb(20, 34, 49) transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(20, 34, 49, 0.5);
  }
`;
export const AddImg = styled.img`
  width: 75px;
  height: 75px;
  box-sizing: border-box;
  border: 1px solid transparent;
  object-fit: cover;
`;
export const DeleteImg = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
`;
export const ButtonDeleteImg = styled.button`
  cursor: pointer;
  color: rgba(20, 34, 49, 0.858);
  position: absolute;
  top: 90%;
  left: 50%;
  font-size: 11px;
  width: 60px;
  height: 30px;
  border: 1px solid #fbc663;
  border-radius: 5px;
  background-color: #fbc663;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  &:hover {
    background-color: #d7a445;
    border: 1px solid transparent;
  }
`;
export const Object = styled.object`
  width: 100%;
  height: 100%;
`;
export const ImputTwo = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: start;
  gap: 10px;
`;
export const CheckboxWrapper = styled.div`
  position: relative;
`;
export const CheckBox = styled.input`
  position: relative;
  width: 40px;
  height: 40px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid rgba(20, 34, 49, 0.7);
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &.blinking {
    animation: ${blinkAnimation} 1s infinite;
  }

  &:checked {
    &::after {
      content: "✓";
      font-size: 36px;
      color: rgba(20, 34, 49, 0.7);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const FooterConcent = styled.label`
  text-align: start;
  font-size: 18px;
`;
export const FooterDelete = styled.button`
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.3s;
  background-color: rgba(20, 34, 49, 0.15);
  &::before {
    content: "УДАЛИТЬ";
    font-family: "Montserrat", sans-serif;
    color: rgba(20, 34, 49, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    width: 190px;
    height: 50px;
    border-radius: 5px;
    z-index: -1;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const PersonalInfo = styled.span`
  cursor: pointer;
  border-bottom: 1px solid #e8b048ee;
  color: #e8b048ee;
  transition: all 0.3s;
  &:hover {
    border-bottom: 1px solid #af7a17ec;
    color: #af7a17ec;
  }
`;
export const BottomLinkUs = styled.div`
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  &::before {
    content: "ОТПРАВИТЬ";
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    width: 190px;
    height: 53px;
    border-radius: 5px;
    background-image: linear-gradient(
        45deg,
        #c69230 20%,
        #fff9b2 50%,
        #ae792b 100%
      ),
      linear-gradient(45deg, #c69230 20%, #fff9b2 50%, #ae792b 100%);
    background-size: 200% 100%;
    transition: background-position 0.3s;
    color: #1c160d;
    z-index: -1;
  }
  &:hover::before {
    background-position: 100% 0, 0 100%; /* Переключаемся между двумя слоями градиента */
  }
  &:active {
    transform: scale(0.95);
  }
`;
// Первый блок футера
export const footerTitle = styled.span`
  color: aliceblue;
  font-size: 29px;
  font-weight: bold;
`;
export const footerMassage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
export const footerImg = styled.div`
  width: 60px;
  height: 60px;
  &.footer-one {
    background-image: url(${footer1});
    background-size: cover;
  }
  &.footer-two {
    background-image: url(${footer2});
    background-size: cover;
  }
  &.footer-three {
    background-image: url(${footer3});
    background-size: cover;
  }
  &.footer-fore {
    background-image: url(${footer4});
    background-size: cover;
  }
`;
export const Message = styled.div`
  width: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const footerImgMessage = styled.a`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: all 0.3s;
    &.whatsapp {
        background-image: url(${whatsapp});
        background-size: cover;
    }
    &.telegramm {
        background-image: url(${telegramm});
        background-size: cover;
    }
    &.vk {
        background-image: url(${vk});
        background-size: cover;
    }
    &.instagramm {
        background-image: url(${instagramm});
        background-size: cover;
    }
    &:hover {
        background-color: #dfa53aee;
    }
`;
export const Confedention = styled.span`
    padding-top: 30px;
    color: #f0f8ff78;
    font-size: 12px;
`
