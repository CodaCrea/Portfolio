import '../style/articleSkills.css';

const ArticleKnowledge = ({ data }) => {
  const { knowledge } = data;

  return (
    <article className="article_skills">
<<<<<<< HEAD
      <figure>
        {knowledge[0]}
      </figure>
      <figure>
        {knowledge[1]}
      </figure>
      <figure>
        {knowledge[2]}
      </figure>
      <figure>
        {knowledge[3]}
      </figure>
      <figure>
        {knowledge[4]}
      </figure>
      <figure>
        {knowledge[5]}
      </figure>
      <figure>
        {knowledge[6]}
      </figure>
      <figure>
        {knowledge[7]}
      </figure>
=======
      {
        knowledge.map((know, index) => {
          return (
            <figure key={index}>
              {know}
            </figure>
          );
        })
      }
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
    </article>
  );
};

export default ArticleKnowledge;