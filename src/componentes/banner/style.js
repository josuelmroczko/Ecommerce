import styled from 'styled-components';
import Cores from '../../utils/cores/cores';

const Slider = styled.div`
  position: relative;
 
  .text-container {
    position: absolute;
    top: 100px;
    text-align: center;
    z-index: 2;
   }
   h1, h2 , p{
    display: flex;
     text-align: center;
    align-items: center;
    width: 80vw;
    color: aliceblue;
     
   }

   img{
    width: 120vw;
    height: 80vh;
    object-fit: cover;
    z-index: 1;
   }
 
 
   .text-container {
  width: 50%;
  float: left;
  padding: 20px;
  
}

.image-container {
  width: 50%;
  float: left;
  z-index: 1;
 }

/* Adicione estilos de sua preferência para responsividade */

.image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); /* Cor preta semi-transparente */
    z-index: 0; /* Ajuste para garantir que a camada preta fique abaixo da imagem */
  }
`;

export default Slider;

 