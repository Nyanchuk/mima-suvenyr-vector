import styled from 'styled-components';

export const Body = styled.div`

`
export const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
    /* position: absolute; */
    opacity: 0.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
`;
export const BodyBurger = styled.div`
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
    width: auto;
    position: absolute;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`
export const BurgerTop = styled.div`
    width: 100%;
    height: 100px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`
export const HeaderImg = styled.img`
    margin: 15px;
    width: 200px;
    height: 55px;
`
export const HeaderLink = styled.a`
    cursor: pointer;
    text-align: center;
    color: #ebebeb;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid transparent;
    box-shadow: 0 0 5px transparent;
    border-radius: 20px;
    padding: 7px;
    transition: all .3s;
    &:hover{
        transform: scale(1.05);
        color: #d6a40ffc;
        border: 1px solid #d6a40fd5;
        box-shadow: 0 0 5px #d6a40fd5;
        border-radius: 20px;
    }
`
export const HeaderLinkUs = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 45px;
    background-color: #d6a40f;
    border: 1px solid #d6a40f;
    border-radius: 25px;
    color: rgb(28, 37, 47);
    font-size: 14px;
    font-weight: 500;
    transition: all .3s;
    &:hover {
        color: rgb(28, 37, 47);
        background-color: #ebebeb;
        border: 1px solid #ebebeb;
        box-shadow: 0 0 10px #ebebeb;
    }
`
export const HeaderBottom = styled.div`
    position: absolute;
    margin-top: 120px;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding-bottom: 70px;
    gap: 25px;
    height: 231px;
    background: linear-gradient(to bottom, rgba(229, 205, 107, 0), rgba(255, 202, 10, 0), rgba(255, 202, 10, 0), rgba(20, 34, 49, 0.283), rgb(20, 34, 49));
`
export const HeaderSlogan = styled.p`
    font-weight: 500;
    max-width: 700px;
    font-size: 24px;
    color: #d6a40f;
`
export const HeaderTitle = styled.p`
    font-weight: 700;
    font-size: 64px;
    color: #ebebeb;
`
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
        border: 1px solid #d6a40fcd;
        box-shadow: 0 0 5px #d6a40fcd;
        border-radius: 20px;
    }
    &:active {
        border: 1px solid #ebebeb;
        box-shadow: 0 0 7px #ebebeb;
        border-radius: 20px;
    }
`
