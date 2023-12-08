import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  return (
    <section className="timeline-section section-padding" id="section_3">
      <div className="section-overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">How does it work?</h2>
          </div>

          <div className="col-lg-10 col-12 mx-auto">
            <div className="timeline-container">
              <ul
                className="vertical-scrollable-timeline"
                id="vertical-scrollable-timeline"
              >
                <div className="list-progress">
                  <div className="inner"></div>
                </div>

                <li>
                  <h4 className="text-white mb-3">Register for free</h4>

                  <p className="text-white">
                    <Link to="/register" style={{ color: 'darkred' }}>
                      Register here
                    </Link>{' '}
                    to get access to the all EventApp features. Or{' '}
                    <Link to="/login" style={{ color: 'darkred' }}>
                      login now
                    </Link>
                    , if you already have an account.
                  </p>

                  <div className="icon-holder">
                    <i className="bi-search"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">
                    Bookmark &amp; Keep it Events in Your Profile
                  </h4>

                  <p className="text-white">
                    Mark events that you want to attend to keep your place and
                    find all of them in your <Link to="/profile"> profile page</Link>!
                  </p>

                  <div className="icon-holder">
                    <i className="bi-bookmark"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Create, Edit &amp; Delete</h4>

                  <p className="text-white">
                    Create, Edit and Delete your own events!
                  </p>

                  <div className="icon-holder">
                    <i className="bi-book"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-12 text-center mt-5">
            <p className="text-white">
              Want to learn more?
              <a href="#" className="btn custom-btn custom-border-btn ms-3">
                Check out Youtube
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
