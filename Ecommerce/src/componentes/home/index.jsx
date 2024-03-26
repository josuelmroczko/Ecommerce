import React from 'react';
import StyleDiv from './style';
 
import { Link } from 'react-router-dom';
import { useImages } from '../../imagemProvider/imagemProvider';

export default function Home() {
  const { imagemLogo, imagemCart, imagemLupaPesquisa } = useImages();

  return (
    <StyleDiv>
      <div className="home-container">
        <ul className="nav-list">
          <React.Fragment>
            <li>
              <img className="logo" src={imagemLogo} alt="Imagem da Logo" />
            </li>
   {/*
          <li>
              <label htmlFor="pesquisa">
                <button>
                  <img
                    className="lupaPesquisa"
                    src={imagemLupaPesquisa}
                    alt="Ícone de Lupa"
                  />
                </button>
              </label>
              <input type="search" id="pesquisa" placeholder="Digite aqui" />
              <button>
                <img className="cart" src={imagemCart} alt="Ícone de Carrinho" />
            </button>
          
           </li> 
           */}

            <li className="menu-options">
              <a href="/">
                <img className="logoMobile" src={imagemLogo} alt="" />
              </a>
              <Link to="/">Home</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/sobre">Sobre</Link>
              
            </li>
          </React.Fragment>
        </ul>
      </div>
    </StyleDiv>
  );
}
