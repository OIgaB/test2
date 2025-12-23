import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cell = styled.div`
  padding: 10px;
`;

export const CellColored = styled(Cell)`
  background-color: yellow;
  border: 1px solid greenyellow;
`;
