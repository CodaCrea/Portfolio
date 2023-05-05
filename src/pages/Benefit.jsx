import { CardPrestations } from '../config';
import '../style/benefit.css';

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