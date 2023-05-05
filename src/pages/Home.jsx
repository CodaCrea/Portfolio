import { banner } from '../config';
import '../style/home.css';

const Home = () => {
  return (
    <section className="container">
      <div className="present">
        <div className="present_first_title">
          <h1>Bienvenue sur mon portfolio<span>de développeur web</span></h1>
        </div>
        <div className="present_para">
          <p>Bonjour, je suis Eric, développeur web motivé et déterminé dans tout ce que j'entreprends. Je prends plaisir à me former et en apprendre tous les jours, que ce soit dans le développement web ou dans la programmation de jeux vidéo.</p>
        </div>
        <div className="present_second_title">
          <h2>Bonne visite</h2>
        </div>
      </div>
      <div className="present_img">
        <img src={banner} alt="Bannière trois écrans d'ordinateur effet matrix" />
      </div>
    </section>
  );
};

export default Home;