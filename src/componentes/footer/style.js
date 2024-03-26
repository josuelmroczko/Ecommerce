import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: baseline;
  text-align: center;
  justify-content: space-around;
  padding: 50px;
 

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  img {
    width: 100px;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
  }
`;

export const Direitos = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
