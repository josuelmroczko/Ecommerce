import React from 'react';
import Home from '../../componentes/home/index.jsx';
import Banner from '../../componentes/banner/banner.jsx';
import Footer from '../../componentes/footer/footer.jsx';
import Produtos from '../../componentes/produtos/produtos.jsx';
import produtosData from '../../adicionarProdutos/produtos.js';

import imagemLogo from '../../imagem/logoPrincipal.png';
import cart from '../../imagem/cart.svg';
import lupaPesquisa from '../../imagem/lupa.png';
import banner1 from '../../imagem/banner2.jpg';
import banner2 from '../../imagem/technology.jpg';

function Homeeapp() {
  return (
    <div className="App">
      <Home
        imagemLogo={imagemLogo}
        imagemCart={cart}
        imagemLupaPesquisa={lupaPesquisa}
      />
      <Banner banner1={banner1} banner2={banner2} />
      <Produtos produtosData={produtosData} />
      <Footer logo={imagemLogo} />
    </div>
  );
}

export default Homeeapp;
