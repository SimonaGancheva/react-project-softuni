export const EventCard = ({title}) => {
  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
    <div className="custom-block bg-white shadow-lg">
      <a href="topics-detail.html">
        <div className="d-flex">
          <div>
            <h5 className="mb-2">{title}</h5>

            <p className="mb-0">Topic Listing Template based on Bootstrap 5</p>
          </div>

          <span className="badge bg-design rounded-pill ms-auto">14</span>
        </div>

        <img
          src="images/topics/undraw_Remote_design_team_re_urdx.png"
          className="custom-block-image img-fluid"
          alt=""
        />
      </a>
    </div>
  </div>;
};
