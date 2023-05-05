import '../style/articleSkills.css';

const ArticleSkills = ({ data }) => {
  const { skills } = data;

  return (
    <article className="article_skills">
      {
        skills.map((skill, index) => {
          return (
            <figure key={index}>
              {skill}
            </figure>
          );
        })
      }
    </article>
  );
};

export default ArticleSkills;