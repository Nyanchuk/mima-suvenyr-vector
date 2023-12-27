import styled from 'styled-components';
import parallax from './img/img:66.svg'

export const Wrapper = styled.div`
    height: auto;
`
export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Main = styled.div`
    position: relative;
    top: 450px;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

`
export const MainInfo = styled.div`
    color: #d6a40f;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 35px;
`
export const MainInfo_slogan = styled.div`
    color: #ebebeb;
    font-weight: 300;
    font-size: 20px;
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
`
export const MainParallax = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const MainParallaxSlogan = styled.p`
    position: absolute;
    padding-bottom: 42px;
    max-width: 800px;
    text-align: center;
    padding-top: 18px;
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
`
export const MainImgBottom = styled.a`
    position: relative;
    width: 100%;
    height: 700px;
    background-size: cover;
    margin-top: 45px;
`
export const Parallax = styled.div`
    background-image: url(${parallax});
    opacity: 0.9;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 120px;
    margin-bottom: 35px;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-color: rgba(12, 44, 76, 0.3);
    }
`
export const MainWhy = styled.div`
    display: flex;
    justify-content: center;
    gap: 45px;
`
export const MainItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
`
export const MainItemsTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`
export const MainItem = styled.div`
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-color: #d6a40ffc;
    border: 1px solid #d6a40ffc;
    border-radius: 30px;
`
export const MainItemText = styled.div`
    width: 750px;
    color: #d6a40ffc;
    height: 30px;
    text-align: start;
    font-size: 18px;
    margin-top: 10px;
`
export const HeaderLinkUs = styled.div`
    cursor: pointer;
    margin-top: 35px;
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