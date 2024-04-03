import { data } from "../../adicionarProdutos/dataTextos";
import { ServicosStyle } from "./servicosStyle";

export default function Servicos(texto){
    return(
        <ServicosStyle>
            <h2>{data.servicos.nomeDaSessao}</h2>
        <ul>
            <li><h4>{data.servicos.titulo1}</h4>{data.servicos.texto1}</li>

  
            <li><h4>{data.servicos.titulo2}</h4>{data.servicos.texto2}</li>
            <li><h4>{data.servicos.titulo3}</h4>{data.servicos.texto3}</li>  

           </ul>       
        </ServicosStyle>
    )
}
