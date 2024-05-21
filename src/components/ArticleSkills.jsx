import '../style/articleSkills.css';

const ArticleSkills = ({ data }) => {
  const { skills } = data;

  return (
    <article className="article_skills">
<<<<<<< HEAD
      <figure>
        {skills[0]}
      </figure>
      <figure>
        {skills[1]}
      </figure>
      <figure>
        {skills[2]}
      </figure>
      <figure>
        {skills[3]}
      </figure>
      <figure>
        {skills[4]}
      </figure>
      <figure>
        {skills[5]}
      </figure>
      <figure>
        {skills[6]}
      </figure>
      <figure>
        {skills[7]}
      </figure>
=======
      {
        skills.map((skill, index) => {
          return (
            <figure key={index}>
              {skill}
            </figure>
          );
        })
      }
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
    </article>
  );
};

export default ArticleSkills;