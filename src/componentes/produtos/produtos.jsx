import React from 'react';
import { StyleProdutos } from './style';

// Função para formatar o preço (exemplo simples)
function formatarPreco(preco) {
  if (preco !== undefined) {
    // Adicione aqui a formatação desejada, por exemplo, adicionar símbolo de moeda, casas decimais, etc.
    return `R$ ${preco.toFixed(2)}`;
  } else {
    return 'Preço não disponível';
  }
}

export default function Produtos({ produtosData }) {
  return (
    <StyleProdutos>
      <ul>
        {produtosData.map((produto, index) => (
          <li key={index}>
            <a href={produto.link} target='blank'>
              <div className="produto-info">
                <img
                  src={produto.imagem}
                  alt={`Imagem ${index}`}
                  className="imagem-produto"
                />
                <p>{produto.nome}</p>
                <span>{`Preço: ${formatarPreco(produto.preco)}`}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </StyleProdutos>
  );
}
