import React from 'react';
import StyleDiv from './style';
 
import { Link } from 'react-router-dom';
import { useImages } from '../../imagemProvider/imagemProvider';

export default function Home() {
  const { imagemCart, imagemLupaPesquisa } = useImages();

  return (
    <StyleDiv>
      <div className="home-container">
        <ul className="nav-list">
          <React.Fragment>
            <li>
              <h3>System</h3>
            </li>
 

            <li className="menu-options">
         
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
