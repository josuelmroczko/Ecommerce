import { StyledDiv } from './contatos';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import Footer from '../../componentes/footer/footer';
import { useImages } from '../../imagemProvider/imagemProvider'




export default function ContatoConteudo() {
  const [textareaRows, setTextareaRows] = useState(1);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
 
  function sendEmail(e){
    e.preventDefault();
    if(name ===''|| email ==='' || message===''){
      alert("Preencha todos os campos")
      return
    }

    const templateParams ={
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_6n3k3e6","template_erejt8l",templateParams,"eb6YouwGZ_PxGm0rD")
    .then((response) => {
        console.log("Email enviado:", response.status, response.text);
        alert("Email enviado com sucesso!");
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar email. Por favor, tente novamente mais tarde.");
    });
  }
  const { imagemLogo } = useImages();
  
  return (
    <StyledDiv>
      <div className="contatos-container">
        <h1 className='contatos'>Contatos</h1>
        <ul className="contatos-list">
          <li>whatsapp: 1122334455</li>
          <li>whatsapp: 1122334455</li>
           
        </ul>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={sendEmail}>
          <h3>Enviar email</h3>
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea 
  className="textarea"
  placeholder="Digite sua mensagem..."
  onChange={(e) => {
    setMessage(e.target.value);
    const rows = Math.ceil(e.target.scrollHeight / 20); // Ajuste conforme necessário
    setTextareaRows(rows);
  }}
  value={message}
  rows={textareaRows}
/>
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
     
     
      <div className="footer-container">
        <Footer logo={imagemLogo} />
      </div>
    </StyledDiv>
  );
}
