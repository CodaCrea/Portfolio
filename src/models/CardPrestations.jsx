import { ArticleBenefit } from '../config';
import data from '../data/data.json';
import '../style/cardPrestations.css';

const CardPrestations = () => {
  return (
    <section className='cardprestations'>
      {
        data.map(list => {
          return (
            <div key={list._id}>
              <ArticleBenefit data={list} />
            </div>
          );
        })
      }
    </section>
  );
};

export default CardPrestations;