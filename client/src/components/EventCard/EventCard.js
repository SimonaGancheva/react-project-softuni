import { Link } from 'react-router-dom'

export const EventCard = ({
  _id,
  title,
  imageUrl,
  date,
  site,
  maxGuests
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
      <div className="custom-block bg-white shadow-lg">
        <Link to={`/catalog/${_id}`}>
          <div className="d-flex">
            <div>
              <h5 className="mb-2">{title}</h5>

              <p className="mb-0">date: {date}</p>
              <p className="mb-0">site: {site}</p>
            </div>

            {/* TODO: show free space left */}
            <span className="badge bg-design rounded-pill ms-auto">{maxGuests}</span> 
          </div>

          <img src={imageUrl} className="custom-block-image img-fluid" alt="" />
        </Link>
      </div>
    </div>
  );
};
