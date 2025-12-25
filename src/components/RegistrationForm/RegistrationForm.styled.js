import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  padding: 32px;
  border-radius: 12px;
  background-color: #0f172a;
  color: #e5e7eb;
  gap: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? '#ef4444' : '#334155')};
  background: #020617;
  color: #e5e7eb;

  &:focus {
    outline: none;
    border-color: #38bdf8;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: #ef4444;
`;

export const Button = styled.button`
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #38bdf8;
  color: #020617;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #0ea5e9;
  }
`;
