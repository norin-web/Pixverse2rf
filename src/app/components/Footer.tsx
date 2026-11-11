import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="frame footer__in">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo logo--ink">
              <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
              <span>{site.brand}</span>
            </Link>
            <p>AI video and image generator for iPhone. Published by {site.operator}.</p>
          </div>
          <div className="footer__cols">
            <div>
              <span className="footer__h">Product</span>
              <ul>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <span className="footer__h">Help</span>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <span className="footer__h">Contact</span>
              <ul>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>
            <p>© {site.year} {site.operator}</p>
            <p className="footer__legal">{site.disclaimer}</p>
          </div>
          <button className="footer__top-btn" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
