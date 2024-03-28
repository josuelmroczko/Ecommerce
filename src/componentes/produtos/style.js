import styled from 'styled-components';

export const StyleProdutos = styled.div`
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    margin: 25px;
  }

  .produto-info {
    text-align: center;
  }

  .imagem-produto {
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.5s ease; /* Transição apenas para a propriedade transform */
  }

  .imagem-produto:hover {
    transform: scale(1.1); /* Aumenta a escala da imagem em 10% ao passar o mouse */
  }

  p {
    margin: 10px 0;
  }

  span {
    display: block;
    font-weight: bold;
  }
  a{
    color: black;
  }
`;
