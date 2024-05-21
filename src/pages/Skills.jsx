import { CardSkills } from "../config";
import '../style/skills.css';

const Skills = () => {
  return (
<<<<<<< HEAD
    <div className="container">
=======
    <div className="container container_skills">
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
      <section className="skills">
        <div className="skills_title_para">
          <div className="skills_title">
            <h1>Présentation de mes savoirs-faire</h1>
          </div>
          <div className="skills_para">
            <p>Voici mes compétences et connaissances dans le domaine du développement.</p>
          </div>
        </div>
        <div className="skills_bloc">
          <div className="skills_bloc_title">
            <h2>Mes compétences :</h2>
          </div>
          <CardSkills />
        </div>
      </section>
    </div>
  );
};

export default Skills;