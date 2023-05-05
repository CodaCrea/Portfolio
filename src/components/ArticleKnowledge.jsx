import '../style/articleSkills.css';

const ArticleKnowledge = ({ data }) => {
  const { knowledge } = data;

  return (
    <article className="article_skills">
      {
        knowledge.map((know, index) => {
          return (
            <figure key={index}>
              {know}
            </figure>
          );
        })
      }
    </article>
  );
};

export default ArticleKnowledge;