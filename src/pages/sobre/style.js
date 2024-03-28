import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: absolute;
  top: 100px;
  height: 480px;
   text-align: center;
  bottom: 0;
  padding-right: 10%;
  padding-left: 10%;
   overflow-y: auto;  
  font-size: 18px;
  z-index: 999;
  &::-webkit-scrollbar { /* Estilo da barra de rolagem para navegadores Webkit (como Chrome, Safari, etc.) */
    width: 0px; /* Torna a barra de rolagem invisível */
    background: transparent; /* Define a cor de fundo da barra de rolagem como transparente */
  }

  @media only screen and (max-width: 600px){
 top: 150px;
 font-size: 14px;
 padding-bottom: 100px;
 
  }
 
`;
