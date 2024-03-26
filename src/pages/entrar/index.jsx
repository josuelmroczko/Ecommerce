import { Link } from 'react-router-dom';
import Home from '../../componentes/home';
import StyleDiv from '../../componentes/home/style';
import ModalEntrar from './modalEntrar.jsx';

export default function Entrar() {
  return (
    <StyleDiv>
      <Home />
      <ModalEntrar />
    </StyleDiv>
  );
}
