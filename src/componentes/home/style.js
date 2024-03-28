import styled from 'styled-components';
import Cores from '../../utils/cores/cores';

const StyleDiv = styled.div`
  position: fixed;
  z-index: 999;
  background-color: ${Cores.brancoTransparente};
  width: 100%;
  left: 0px;

  display: flex;
  align-items: center;
  flex-direction: column;
  top: -10px;
   .home-container {
    width: 100%;
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
  }

  li {
    display: flex;
  }

  .logo {
    width: 80px;
  }

  .cart {
    width: 15px;
  }

  a {
    text-decoration: none;
    color: ${Cores.preto};
  }

  button {
    background-color: transparent;
    border: none;
  }

  .lupaPesquisa {
    width: 18px;
  }

  .menu-options {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
  }

  #pesquisa {
    background-color: ${Cores.cinzaClaro};
    border: 1px solid;
    border-radius: 3px 9px;
  }

  .logoMobile {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .nav-list {
      position: fixed;
      justify-content: space-around;
      background-color: ${Cores.brancoTransparente};
      padding: 20px;
       
      width: 100%;
      left: -30px;
      flex-direction: column-reverse;
      align-items: center;
    }

    .logo {
      display: none;
    }

    .logoMobile {
      display: block;
      position: relative;
      left: 10px;
      width: 100%;
      max-width: 70px;
      top: -30px;
    }
li{
  padding-top: 20px;
 
}
    a {
      height: 20px;
    }
  }
`;

export default StyleDiv;
