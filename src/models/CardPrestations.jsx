import { ArticleBenefit } from '../config';
import data from '../data/data.json';
import '../style/cardPrestations.css';

const CardPrestations = () => {
  return (
<<<<<<< HEAD
    <section>
      {
        data.map(list => {
          return (
            <div className='card_prestations' key={list._id}>
=======
    <section className='cardprestations'>
      {
        data.map(list => {
          return (
            <div key={list._id}>
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
              <ArticleBenefit data={list} />
            </div>
          );
        })
      }
    </section>
  );
};

export default CardPrestations;