import './style.css';
import Copyright from '../../assets/copyright.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Todos os direitos reservados</p>
        <img src={Copyright} alt="Imagem do símbolo de Copyright" />
        <p>2022</p>
      </div>
    </footer>
  );
}

export default Footer;