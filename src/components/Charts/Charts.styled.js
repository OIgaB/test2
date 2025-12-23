import styled from 'styled-components';

import { device } from 'styles/device';

export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: ${props => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.48px;
  color: ${props => props.color || props.theme.colors.black};
  @media ${device.xxl} {
    margin-bottom: 24px;
    font-size: 24px;
    letter-spacing: 0.24px;
  }
`;

export const Card = styled.div`
  padding: 16px;
  width: 520px;
  height: 300px;
`;

export const TotalNumber = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
