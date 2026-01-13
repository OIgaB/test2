import styled from 'styled-components';

export const ImagesList = styled.ul`
  display: flex;
  gap: 10px;
  background-color: paleturquoise;
  width: 100%;
  min-height: 210px;
`;

export const ImageItem = styled.li`
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.6);
  border: none;
  cursor: pointer;

  color: white;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(220, 38, 38, 0.9);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
