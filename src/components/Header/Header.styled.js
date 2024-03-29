import styled, { css } from 'styled-components';
import { device } from '../../styles/device';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './Elements/logo.svg';
import { transition } from '../../utils/variables.styled';

export const Header = styled.header`
    position: absolute; // - якщо потрібно, щоб наступне зображення було під хедером
    z-index: 1000;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${( props ) => props.color || props.theme.colors.white};
    box-shadow: 0 4px 4px rgba(45, 45, 45, 0.20);
    @media screen and (max-width: 834px) {
        background-color: transparent;
        box-shadow: none;
    }
`;

export const HeaderContainer = styled.div`
    width: 1440px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 160px;  
    @media ${device.xxl} { // 1440
        width: 1200px;
        padding-left: 40px;
        padding-right: 40px;
    }
    @media ${device.xl} { // 1200
        width: 992px;
        padding-left: 30px;
        padding-right: 30px;
    }
    @media ${device.lg} { // 992  
        width: 835px;
    }
    @media screen and (max-width: 834px) { // до - моб меню
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const LogoLink = styled( Link )`
    ${( props ) => props.$overflow
      ? css`
          margin-right: ${142 - props.$overflow}px;
        `
      : css`
          margin-right: 142px;
    `};
    @media ${device.xl} {
        ${( props ) => props.$overflow
        ? css`
            margin-right: ${80 - props.$overflow}px; // 30px;
            `
        : css`
            margin-right: 70px;
        `};
    }
    @media ${device.lg} {
        margin-right: 40px;
    }
    @media screen and (max-width: 834px) {
        margin-right: auto;
    }
`;

export const Logo = styled( LogoSvg )`
    width: 152px;
    height: 40px;
    @media screen and (max-width: 360px) {
        width: 93px;
        height: 23px;
    }
`;

export const SearchBtn = styled.button`
    display: none;
    @media screen and (max-width: 360px) {
        display: block;
        margin-right: 17px;
        background-color: transparent;
        border: none;
        fill: none;
        stroke: ${( props ) => props.color || props.theme.colors.black};
        &:hover,
        &:focus {
            stroke: ${( props ) => props.color || '#797979'};
        }
    }
`;

export const NavWrapper = styled.div`
    > nav {
        display: flex;
        align-items: center;
        gap: 48px;
        ${( props ) => props.$overflow
        ? css`
            margin-right: ${143 - props.$overflow}px;
            `
        : css`
          margin-right: 143px;
        `};
        @media ${device.xl} {
            ${( props ) => props.$overflow
            ? css`
                gap: 23px;
                margin-right: ${91 - props.$overflow}px;
                `
            : css`
                gap: 32px;
                margin-right: 71px;
            `};
        }
        @media ${device.lg} {
            gap: 25px;
            margin-right: 40px;
        }
        @media screen and (max-width: 834px) {
            margin-right: 0;
        }
        > a {
            font-size: 20px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            @media ${device.lg} {
                font-size: 16px;
            }
            @media screen and (max-width: 834px) {
                display: none;
            }
        }
    }
`;

export const CountryMenuWrapper = styled.div`
    margin-right: 23px;
    > div {
        gap: 8px;
    }
    > div > p {
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: 0.2px;
        white-space: nowrap;
        min-width: 50px;
        max-width: 180px;
        overflow: hidden; 
        text-overflow: ellipsis;
        @media ${device.lg} {
            font-size: 16px;
            max-width: 73px;
        }
    }
    > div > button {
        width: 12px;
        height: 28px;
    }
    @media ${device.lg} {
        margin-right: 15px;
    }
    @media screen and (max-width: 834px) {
        display: none;
    }
`;

export const LanguageWrapper = styled.div`
    margin-right: 40px; 
    > div > button {
        font-size: 20px;
        letter-spacing: 0.2px;
        @media ${device.lg} {
            font-size: 16px;
        }
    }
    @media ${device.xl} {
        ${( props ) => props.$overflow
        ? css`
            margin-right: 25px;
        `
        : css`
            margin-right: 35px;
        `};
    }
    @media screen and (max-width: 834px) {
        display: none;
    }
`;

export const SignInBtn = styled( Link )`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 48px;
  padding: 14px 32px;
  color: ${( props ) => props.color || props.theme.colors.primary};
  background: linear-gradient(white, white) padding-box,
              linear-gradient(87.92deg, #09194D 0%, #234890 100%) border-box;
  border: 4px solid transparent;
  border-radius: 20px 0;
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.2px;
  transition: background ${transition}, border-color ${transition}, color ${transition};
  &:hover,
  &:focus {
    background: ${( props ) => props.color || props.theme.colors.primary};
    border-color: ${( props ) => props.color || props.theme.colors.primary};
    color: ${( props ) => props.color || props.theme.colors.white};
  }
  @media ${device.xl} {
    width: 98px;
    height: 43px;
    font-size: 16px;
  }
  @media screen and (max-width: 834px) {
    display: none;
  }
`;
