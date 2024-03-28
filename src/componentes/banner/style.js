import styled from 'styled-components';
import Cores from '../../utils/cores/cores';

const Slider = styled.div`
  position: relative;
 
  .text-container {
    position: absolute;
    top: 120px;
    text-align: center;
    z-index: 2;
   }
   h1 , p{
    display: flex;
    position: relative;
    left: 10px;
    text-align: center;
    width: 90vw;
    color:${Cores.branco};
    
     
   }
   h1 {
  font-size: 3rem;
 
   }
   p{
    font-size: 2.2rem;
    text-align: center;
   }
  

   img{
    width: 120vw;
    height: 90vh;
    object-fit: cover;
    z-index: 1;
   }
 
 
   .text-container {
  width: 50%;
  float: left;
  padding: 20px;
  text-align: center;
  
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

  @media (max-width:600px) {
    h1 , p{
      left: -15px;
    }
    h1 {
  font-size: 2rem;
   }
   p{
    font-size: 1rem;
   }
  }
`;

export default Slider;

 