import './style.css';
import WikipetiaLogo from '../../assets/wikipetiaLogo.png';
import GithubLogo from '../../assets/githubLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="logo">
        <a href="http://localhost:3000/">
          <img src={WikipetiaLogo} alt="Logo da Wikipetia" />
        </a>
        <p>Wikipetia</p>
      </div>
      <div className="buttons">
        <Link to="/">
          <button className='btn'>Home</button>
        </Link>
        <Link to="/about">
          <button className='btn'>About</button>
        </Link>
      </div>
      <a href="https://gitlab.com/ormesino/wikipetia" target="_blank" rel="noopener noreferrer">
        <img src={GithubLogo} alt="Logo do GitHub" className="githubLogo" />
      </a>
    </nav>

  );
};


export default Header;