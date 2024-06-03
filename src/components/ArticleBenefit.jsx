import { Link } from 'react-router-dom';
import '../style/articleBenefit.css';

const ArticleBenefit = ({ data }) => {
  const { title, picture, website, code } = data;

  return (
    <article className="articlebenefit">
      <img src={picture} alt={title} />
      <figure>
        <div className="articlebenefit_title">
          <h3>{title}</h3>
        </div>
        <figcaption className="articlebenefit_img">
          <button className={website ? "display" : "display_none"}>
            <Link aria-label="Redirection vers le site web" to={website}>
              Voir le site web
            </Link>
          </button>
          <button>
            <Link aria-label="Redirection vers le code" to={code}>
              Voir le code
            </Link>
          </button>
        </figcaption>
      </figure>
    </article>
  );
};

export default ArticleBenefit;