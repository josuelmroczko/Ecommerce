import React from 'react';
import Home from '../../componentes/home/index.jsx';
import Banner from '../../componentes/banner/banner.jsx';
import Footer from '../../componentes/footer/footer.jsx';
import Produtos from '../../componentes/produtos/produtos.jsx';
import produtosData from '../../adicionarProdutos/produtos.js';

 
import cart from '../../imagem/cart.svg';
import lupaPesquisa from '../../imagem/lupa.png';
import banner1 from '../../imagem/banner2.jpg';
import banner2 from '../../imagem/banner1.jpg';
import Servicos from '../../componentes/servicos/servicos.jsx';
import Valores from '../../componentes/valores/valores.jsx';
import Whatsapp from '../../componentes/whatsapp/whatsapp.jsx';

function Homeeapp() {
  return (
    <div className="App">
      <Home
        imagemCart={cart}
        imagemLupaPesquisa={lupaPesquisa}
      />
      <Banner banner1={banner1} banner2={banner2} />
      
      <Servicos/>
      <Valores/>
      <Produtos produtosData={produtosData} />
      <Whatsapp/>
      <Footer />
      
    </div>
  );
}

export default Homeeapp;
