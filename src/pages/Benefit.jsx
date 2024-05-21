import { CardPrestations } from '../config';
<<<<<<< HEAD
import '../style/articlePrestations.css';
=======
import '../style/benefit.css';
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392

const Benefit = () => {
  return (
    <section className="container">
      <div className='prestation_titles'>
        <div className="prestation_title">
          <h1>Présentation de mes projets</h1>
        </div>
        <div className="prestation_title_achievement">
          <h2>Mes réalisations :</h2>
        </div>
      </div>
      <div className="prestation_articleBenefit">
        <CardPrestations />
      </div>
    </section>
  );
};

export default Benefit;