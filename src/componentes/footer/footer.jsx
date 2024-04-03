import { data } from '../../adicionarProdutos/dataTextos';
import { Direitos, FooterContainer } from './style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <FooterContainer>
        <ul>
          <h3>{data.footer.contatos.Contatos}</h3>
          <li>
           <a href="tel:+55 993093681"> <p> {data.footer.contatos.telefone}</p></a>
            
          </li>
          <li>
           <a href={data.footer.contatos.whatsappLink}> <p>{data.footer.contatos.whatsapp}</p></a> 
          </li>
          <li>
          <a href="mailto:techjurisJP@hotmail.com
">
    <p>{data.footer.contatos.email}</p>
</a>          </li>
        </ul>

        <ul>
          <li>
            <h3>{data.footer.Sociais.redesSociais}</h3>
          </li>
          <li>
            <a href={data.footer.Sociais.InstagramLink}><p>{data.footer.Sociais.Instagram}</p></a>
          </li>
          <li>
            <p>{data.footer.Sociais.facebook}</p>
          </li>
          <li>
            <a href={data.footer.Sociais.linkedinLink}><p>{data.footer.Sociais.linkedin}</p></a>
          </li>
         
        </ul>

        {/*<ul>
          <li>
            <h3>{data.footer.politicas.politicasDeCompra}</h3>
          </li>
          <li>
            <p>{data.footer.politicas.Politicas}</p>
          </li>
          <li>
            <p>{data.footer.politicas.duvidas}</p>
          </li>
        </ul>*/}

        
      </FooterContainer>
      <Direitos>
        {' '}
        <p className="direitos">
          Este site é protegido pelo reCAPTCHA e a Política de Privacidade e os
          Termos de Serviço do Google se aplicam.
        </p>
      </Direitos>
    </div>
  );
};

export default Footer;
