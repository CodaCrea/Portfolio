import { Link } from "react-router-dom";
import { github, linkedin } from "../config";
import '../style/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_links">
        <div className="footer_links_img">
          <Link aria-label="lien linkedin" to="https://www.linkedin.com/in/eric-b-468a20252" target="_blank">
            <img src={linkedin} alt="Lien linkedin" />
          </Link>
        </div>
        <div className="footer_links_img">
          <Link aria-label="lien linkedin" to="https://github.com/Devveric?tab=repositories" target="_blank">
            <img src={github} alt="Lien github" />
          </Link>
        </div>
      </div>
      <div className="footer_copyright">
        <p>-- © 2023 par EricBT. Tous droits réservés --</p>
      </div>
    </footer>
  );
};

export default Footer;