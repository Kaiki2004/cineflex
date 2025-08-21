import styled from "styled-components";

export const SeatsContainer = styled.div`
  display: flex;          /* inline-flex não é necessário aqui */
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;/* 'justify-items' não funciona em flex */
  align-items: center;
  margin: 20px 0;
`;

export const Seat = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  /* Cursor e hover condicional por disponibilidade */
  cursor: ${({ $available }) => ($available ? "pointer" : "not-allowed")};

  background-color: ${({ $available, $selected }) =>
    !$available ? "#FADBC5" : $selected ? "#4CAF50" : "#9DB899"};

border: 1px solid
  ${({ $available, $selected }) =>
    !$available ? "#EE897F" : $selected ? "#2B2D36" : "#2B2D36"};


  color: #2B2D36;

  /* Só aplica hover quando disponível */
  ${({ $available }) =>
    $available &&
    `
      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    height: 45px;
    padding: 10px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  height: 45px;
  background-color: #e8833a;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
