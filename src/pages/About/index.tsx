import Footer from '../../components/Footer';
import Photo from '../../assets/dogAndCat.jpeg';
import './style.css';
import Header from '../../components/Header';

function About() {
  return (
    <body>
      <Header />
      <main>
        <div className="info">
          <div className="ref">
            <p>
              Está se sentindo pra baixo ultimamente? Então você veio no lugar <span>certo! </span><br /><br />
              Na <span>Wikipetia</span>, nome que faz sátira ao famoso <span><a href="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal">Wikipédia</a></span>, oferemos a você um momento de fofura com pitadas de relaxamento. Com o intuito de trazer paz à sua mente, a Wikipetia utiliza de APIs públicas para lhe ofecer imagens de cães e gatos, juntamente com alguns fatos sobre eles.<br /><br />
            </p>
            <p>
              Abaixo estão listadas algumas referências utilizadas para realização deste projeto, assim como no canto superior direito da página, você pode conferir o nosso repositório.<br /><br />
              Referências:<br /><br />
            </p>
            <span>
              <ul>
                <li>
                  <a href="https://dribbble.com/shots/19193171-HomePet-Pet-shop-landing-page">
                    HomePet - Pet shop landing page
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/shots/6753947-Zoo-Animal-Park-Website">
                    Zoo & Animal Park Website
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/shots/18078202-Doc-for-the-Pet-Veterinarian-Website">
                    Doc for the Pet - Veterinarian Website
                  </a>
                </li>
                <li>
                  <a href="https://docs.thedogapi.com/">
                    Dog API
                  </a>
                </li>
                <li>
                  <a href="https://docs.thecatapi.com/">
                    Cat API
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/file/54KbI5zIwVekZj7isuzHUq/Wikipetia?node-id=0%3A1">
                    Projeto no Figma
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <img src={Photo} alt="Foto de um cachorro e um gato juntos." />
        </div>
      </main>
      <Footer />
    </body>
  )
}

export default About;