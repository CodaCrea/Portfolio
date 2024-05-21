import { Link } from 'react-router-dom';
import '../style/articleBenefit.css';

const ArticleBenefit = ({ data }) => {
<<<<<<< HEAD
  const { title, picture, website, code } = data;
=======
  const { title, description, picture, website, code, linkWebsite, linkCode } = data;
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392

  return (
    <article className="articlebenefit">
      <img src={picture} alt={title} />
      <figure>
        <div className="articlebenefit_title">
<<<<<<< HEAD
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
=======
          <h2>{title}</h2>
          {description ? <p>{description}</p> : ""}
        </div>
        <figcaption className="articlebenefit_buttons">
          <div className={website ? "articlebenefit_button_display" : "articlebenefit_button_display_none"}>
            <button>
              <Link aria-label="Redirection vers le site web" to={website} target='_blank'>
                {linkWebsite}
              </Link>
            </button>
          </div>
          <div className={code ? "articlebenefit_button_display" : "articlebenefit_button_display_none"}>
            <button>
              <Link aria-label="Redirection vers le code" to={code} target='_blank'>
                {linkCode}
              </Link>
            </button>
          </div>
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
        </figcaption>
      </figure>
    </article>
  );
};

export default ArticleBenefit;