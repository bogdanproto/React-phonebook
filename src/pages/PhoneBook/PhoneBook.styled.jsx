import styled from 'styled-components';

export const PhoneBookStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: rgba(51, 51, 51, 1);
`;

export const PhoneBookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 18px;
  }
`;
