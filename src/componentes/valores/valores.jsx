import React from "react";
import { ValoresStyle } from "./valoresStyle";

export default function Valores() {
  return (
    <ValoresStyle>
      <ul>
        <li>
          <strong>Plano Básico:</strong>
          <p>Até 200 emails por mês</p>
          <p>Solicitações de até 50Kb</p>
          <span>R$110</span>
        </li>
        <li>
          <strong>Plano Padrão:</strong> 
          <p>Até 2.000 emails por mês</p>
          <p>Anexos de até 500kb</p>
          <p>Etiqueta totalmente branca</p>

          <span>R$130</span>
        </li>
        <li>
          <strong>Plano Premium:</strong>
          <p> Até 5.000 emails por mês</p>
          <p>Anexos até 2mb</p>
          <p>Etiqueta totalmente branca</p>
          <span>R$160</span>
        </li>
        <li>
          <strong>Plano Premium Plus:</strong>
          <p> Até 25.000 emails por mês</p>
          <p>Anexos até 30mb</p>
          <p>Etiqueta totalmente branca</p>
          <span>R$200</span>
        </li>
      </ul>
    </ValoresStyle>
  );
}
