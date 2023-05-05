import { ArticleKnowledge, ArticleSkills } from "../config";
import '../style/cardSkills.css';
import data from '../data/skills.json';

const CardSkills = () => {

  return (
    <section>
      {
        data.map((list, index) => {
          return (
            <div key={index}>
              <div className="cardSkills_bloc_article">
                <ArticleSkills data={list} />
              </div >
              <div className="cardSkills_line"></div>
              <div className="cardSkills_bloc_title">
                <h2>Mes connaissances :</h2>
              </div>
              <div className="cardSkills_bloc_article">
                <ArticleKnowledge data={list} />
              </div >
            </div>
          );
        })
      }
    </section>
  );
};

export default CardSkills;