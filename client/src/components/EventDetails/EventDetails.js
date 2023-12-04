import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as eventService from '../../services/eventService';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './EventDetails.module.css';

export const EventDetails = ({ onDeleteEventSubmit }) => {
  const { userId } = useContext(AuthContext);

  const [event, setEvent] = useState([]);
  const { eventId } = useParams();

  const isOwner = userId == event._ownerId;
  const canAttend = !isOwner && userId;

  useEffect(() => {
    eventService.getById(eventId).then((result) => {
      setEvent(result);
    });
  }, [eventId]);

  const onDeleteClick = async () => {
    const choice = window.confirm(
      `Are you sure you want to delete ${event.title}?`
    );

    if (choice) {
      await onDeleteEventSubmit(eventId);
    }
  };

  return (
    //TODO refine details page
    <>
      <section
        className="topics-detail-section section-padding"
        id="topics-detail"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 m-auto">
              <h3 className="mb-4">{event.title}</h3>

              <p>{event.summary}</p>

              {/* <blockquote>
                                Freelancing your skills isn't going to make you a millionaire overnight.
                            </blockquote> */}

              <div className="row my-4">
                <div className="col-lg-6 col-md-6 col-12">
                  <p>date: {event.date}</p>
                  <p>site: {event.site}</p>
                  <p>
                    free places left:{' '}
                    <span className="badge bg-design rounded-pill ms-auto">
                      {event.maxGuests}
                    </span>{' '}
                  </p>
                </div>

                <div className="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                  <img
                    src={event.imageUrl}
                    className="topics-detail-block-image img-fluid"
                  />
                </div>
              </div>
              {isOwner && (
                <div className={styles.ownerButtons}>
                  <button type="button" className="btn btn-warning">
                    <Link to={`/catalog/${event._id}/edit`}>Edit Event</Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={onDeleteClick}
                  >
                    Delete Event
                  </button>
                </div>
              )}
              {canAttend && (
                <div className={styles.ownerButtons}>
                  <button type="button" className="btn btn-info">
                    Attend Event
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-12">
              <img
                src="images/rear-view-young-college-student.jpg"
                className="newsletter-image img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
              <form
                className="custom-form subscribe-form"
                action="#"
                method="post"
                role="form"
              >
                <h4 className="mb-4 pb-2">Are you interested?</h4>
                <p>Register for this event with your email now!</p>

                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Email Address"
                  required=""
                />

                <div className="col-lg-12 col-12">
                  <button type="submit" className="form-control">
                    Attend
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
