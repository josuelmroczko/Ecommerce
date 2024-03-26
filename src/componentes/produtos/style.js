import styled from 'styled-components';
import Cores from '../../utils/cores/cores';

export const StyleProdutos = styled.div`
  position: relative;
  ul {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
  a{
    text-decoration: none;
    color: black;
  }
  p {
    font-size: 20px;
  }

  li {
    text-align: center;
     
    width: 300px;
    height: 300px;
    list-style: none;
    line-height: 5px;

    /*background-color: ${Cores.cinzaClaro};*/
    margin: 25px; /* Espaço entre os itens (opcional) */
    box-sizing: border-box; /* Inclui padding e borda no tamanho total do elemento */

    &:hover {
      width: 280px;
      height: 280px;
    }
  }

  @media (max-width: 450px) {
    li {
      width: 250px;
      height: 300;
 

      &:hover {
        width: 250px;
        height: 250px;
      }
    }
  }
`;
