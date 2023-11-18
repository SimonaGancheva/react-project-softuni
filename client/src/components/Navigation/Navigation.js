import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';


export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <i className="bi-back"></i>
          <span>EvenTap</span>
        </a>

        <div className="d-lg-none ms-auto me-4">
          <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5 me-lg-auto">
            <li className="nav-item">
              <div className="nav-link click-scroll">
                {/* <a className={styles.navLinkColor} href="#section_1">
                  Home
                </a> */}
                <Link className={styles.navLinkColor} to="/">Home</Link>
              </div>
            </li>

            <li className="nav-item">
            <div className="nav-link click-scroll">
                {/* <a className={styles.navLinkColor} href="#section_2">
                  Browse Events
                </a> */}
                <Link className={styles.navLinkColor} to="/catalog">Browse Events</Link>
              </div>
            </li>

            {/* <li className="nav-item">
            <div className="nav-link click-scroll">
                <a className={styles.navLinkColor} href="#section_3">
                  How It Works
                </a>
              </div>
            </li> */}

            {/* <li className="nav-item">
            <div className="nav-link click-scroll">
                <a className={styles.navLinkColor} href="#section_4">
                  FAQs
                </a>
              </div>
            </li> */}

            <li className="nav-item">
            <div className="nav-link click-scroll">
                {/* <a className={styles.navLinkColor} href="#section_5">
                  Contact
                </a> */}
                <Link className={styles.navLinkColor} to="/contacts">Contacts</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className={styles.navLinkColor}>Pages</div>
              </a>

              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="topics-listing.html">
                    Topics Listing
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="contact.html">
                    Contact Form
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-none d-lg-block">
            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
          </div>
        </div>
      </div>
    </nav>
  );
};
