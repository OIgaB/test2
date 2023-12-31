import styled from 'styled-components';
import { device } from '../../styles/device';
import { transition } from '../../utils/variables.styled';

export const Section = styled.section`
    padding-top: 118px;
    padding-bottom: 98px;
    @media ${device.sm} {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 160px;  
    @media ${device.xxl} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    padding-bottom: 20px;
    @media ${device.xxl} {  // '1440px',
        max-width: 1000px;
        padding-bottom: 0;
    }
    @media screen and (max-width: 1040px) { 
        max-width: 670px;
        padding-bottom: 0;
    }
    @media screen and (max-width: 710px) {
        max-width: 360px;
        padding-bottom: 23px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 44px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 48px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.48px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media ${device.xxl} {
        margin-bottom: 24px;
        font-size: 24px;
        letter-spacing: 0.24px;
    }
`;

export const Card = styled.div`
    position: relative;
    width: 360px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
    padding: 32px 24px 24px 24px;
    border-radius: 0px 20px;
    border: 2px solid #113268;
    background-color: #F9F9F9;
    @media ${device.xxl} { 
        width: 320px;
        height: 218px;
        padding: 20px;
    }
    @media screen and (max-width: 710px) {
        margin-bottom: 56px; // треба прибрати останній відступ
    }
`;

export const StudentName = styled.h4`
    margin-bottom: 4px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media ${device.xxl} {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;

export const Photo = styled.img`
    position: absolute;
    top: -40px;
    right: 80px;
    width: 100%;
    height: 100vw;
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
    @media ${device.xxl} {
        right: 40px;
    }
`;

export const StarList = styled.ul`
    display: flex;
    gap: 8px; 
    margin-bottom: 8px;
`;

export const TeacherNameWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
    align-items: center;
`;

export const TeacherName = styled.p`
    cursor: pointer;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.primary};
    @media ${device.xxl} {
        font-size: 14px;
        letter-spacing: 0.14px;
    }
`;

export const Feedback = styled.p`
    height: 66px;
    margin-bottom: 8px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media ${device.xxl} {
        font-size: 14px;
        height: 61px;
    }
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Date = styled.span`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media ${device.xxl} {
        font-size: 12px;
        letter-spacing: 0.16px;
    }
`;

export const Detailed = styled.p`
    cursor: pointer;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.primary};
    @media ${device.xxl} {
        font-size: 14px;
        letter-spacing: 0.14px;
    }
`;

export const ControlBtns = styled.ul`
    display: flex; 
    gap: 12px;
    justify-content: center;
    @media screen and (max-width: 710px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const ControlBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

export const BtnIcon = styled.svg`
  fill: ${( props ) => props.color || props.theme.colors.white};
  stroke: ${( props ) => props.color || props.theme.colors.primary};
  transition: fill ${transition}, stroke ${transition};
  &:hover,
   :focus {
        stroke: rgba(121, 121, 121, 1);
        & path {
            fill: rgba(121, 121, 121, 1);
        }
   }
  path {
    fill: ${( props ) => props.color || props.theme.colors.primary};
  }
`;
