import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4 pb-2">
            <a className="navbar-brand mb-2" href="index.html">
              <i className="bi-back"></i>
              <span>EvenTap</span>
            </a>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="site-footer-title mb-3">Resources</h6>

            <ul className="site-footer-links">
              {/* <li className="site-footer-link-item">
              <Link className="site-footer-link" to="/">Home</Link>
              </li> */}

              <li className="site-footer-link-item">
                <Link className="site-footer-link" to="/catalog">
                  Browse Events
                </Link>
              </li>

              {/* <li className="site-footer-link-item">
                <a href="#" className="site-footer-link">
                  FAQs
                </a>
              </li> */}

              <li className="site-footer-link-item">
                <Link className="site-footer-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="site-footer-link-item">
                <Link className="site-footer-link" to="/register">
                  Register
                </Link>
              </li>

              <li className="site-footer-link-item">
                <Link className="site-footer-link" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
            <h6 className="site-footer-title mb-3">Information</h6>

            <p className="text-white d-flex mb-1">
              <a href="tel: 305-240-9671" className="site-footer-link">
                305-240-9671
              </a>
            </p>

            <p className="text-white d-flex">
              <a href="mailto:info@company.com" className="site-footer-link">
                info@company.com
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
            {/* <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>

              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Thai
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    Myanmar
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" type="button">
                    Arabic
                  </button>
                </li>
              </ul>
            </div> */}
            <h6 className="site-footer-title mb-3">Copyright</h6>

            <p className="copyright-text mt-lg-5 mt-4">
              Copyright © 2048 Topic Listing Center. All rights reserved.
              <br />
              <br />
              Design:{' '}
              <a rel="nofollow" href="https://templatemo.com" target="_blank">
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
