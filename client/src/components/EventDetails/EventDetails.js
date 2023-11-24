import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as eventService from '../../services/eventService';

export const EventDetails = () => {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    eventService.getById(eventId).then(
      (result) => {
        setEvent(result);
      },
      [eventId]
    );
  });

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
              <button type="button" className="btn btn-danger">
                Delete Event
              </button>
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
