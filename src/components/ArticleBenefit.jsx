import { Link } from 'react-router-dom';
import '../style/articleBenefit.css';

const ArticleBenefit = ({ data }) => {
  const { title, description, picture, website, code, linkWebsite, linkCode } = data;

  return (
    <article className="articlebenefit">
      <img src={picture} alt={title} />
      <figure>
        <div className="articlebenefit_title">
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
        </figcaption>
      </figure>
    </article>
  );
};

export default ArticleBenefit;