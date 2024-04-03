import React from "react";
import { ValoresStyle } from "./valoresStyle";
import { data } from "../../adicionarProdutos/dataTextos";

export default function Valores() {
  return (
    <ValoresStyle>
      <h2> Planos com Email direto do site</h2>
      <ul>
        <li>
          <strong>{data.valoresEmail.planoBasico}</strong>
          <p>{data.valoresEmail.texto1 }</p>
          <p>{data.valoresEmail.tamanho1}</p>
          <span>{data.valoresEmail.preco1}</span>
        </li>
        <li>
        <strong>{data.valoresEmail.planoPadrao}</strong>
          <p>{data.valoresEmail.texto2 }</p>
          <p>{data.valoresEmail.tamanho2}</p>
          <p>{data.valoresEmail.etiqueta2}</p>

          <span>{data.valoresEmail.preco2}</span>
        </li>
        <li>
        <strong>{data.valoresEmail.planoPremiumPlus}</strong>
          <p>{data.valoresEmail.texto3 }</p>
          <p>{data.valoresEmail.tamanho3}</p>
          <p>{data.valoresEmail.etiqueta2}</p>

          <span>{data.valoresEmail.preco3}</span>
        </li>
    
      </ul>
    </ValoresStyle>
  );
}
