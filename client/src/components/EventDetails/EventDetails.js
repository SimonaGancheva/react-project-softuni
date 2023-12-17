import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as eventService from '../../services/eventService';
import * as attendService from '../../services/attendService';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './EventDetails.module.css';
import { EventContext } from '../../contexts/EventContext';
import { AttendContext } from '../../contexts/AttendContext';

export const EventDetails = () => {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const { onDeleteEventSubmit } = useContext(EventContext);
  const { getUserAttendings } = useContext(AttendContext);

  const { eventId } = useParams();

  const [event, setEvent] = useState([]);
  const [attends, setAttends] = useState([]);
  const [isAttending, setAttending] = useState(false);
  

  const isOwner = isAuthenticated && userId === event._ownerId;
  const canAttend = isAuthenticated && !isOwner && userId;
  const isFull = attends.length >= event.maxGuests;

  useEffect(() => {
    Promise.all([
      eventService.getById(eventId),
      attendService.getAttendantsCount(eventId),
    ])
      .then(([eventData, attendsData]) => {
        setAttends(attendsData);
        setEvent(eventData);

        attendsData.forEach((x) => {
          if (x._ownerId === userId) {
            setAttending(true);
            return;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventId, userId]);

  const onDeleteClick = async () => {
    const choice = window.confirm(
      `Are you sure you want to delete ${event.title}?`
    );

    if (choice) {
      await onDeleteEventSubmit(eventId);
    }
  };

  const onAttendClick = async () => {
    const newAttend = await attendService.attend(eventId);
    setAttends((state) => [...state, newAttend]);
    await getUserAttendings();

    setAttending(true);
    

    // setAttends(attends + (isAttending ? -1 : 1));
    // setAttending(!isAttending);
  };

  

  return (
    

    <section
      className="topics-detail-section section-padding"
      id="topics-detail"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 m-auto">
            <div className="custom-block bg-white shadow-lg">
              <div className="d-flex">
                <div>
                  <h5 className="mb-2">{event.title}</h5>

                  <p className="mb-0"> {event.category}</p>
                  <hr/>
                  <p className="mb-0"> {event.summary}</p>
                  <p className="mb-0">
                    <strong>date:</strong> {event.date}
                  </p>
                  <p className="mb-0">
                    <strong>site:</strong> {event.site}
                  </p>
                </div>

                
                <span 
                // className="badge bg-design rounded-pill ms-auto"
                className={styles.guestsInfo}
                >
                Going: {attends.length}   <br/>
                Max. guests: {event.maxGuests} 
                </span>
              </div>

              {canAttend && (
                <div className={styles.ownerButtons}>
                  <button
                    type="button"
                    className={isAttending ? 'btn btn-success' : 'btn btn-info'}
                    onClick={onAttendClick}
                    disabled={isAttending || isFull}
                  >
                    {isAttending ? <>You are Attending</> : <>Attend Event</>}
                  </button>
                </div>
              )}

              <img
                src={event.imageUrl}
                // className="custom-block-image img-fluid"
                className={styles.imgHeight}
                alt={event.title}
              />

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <section
        className="topics-detail-section section-padding"
        id="topics-detail"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 m-auto">
              <h3 className="mb-4">{event.title}</h3>

              <p>{event.summary}</p>

              

              <div className="row my-4">
                <div className="col-lg-6 col-md-6 col-12">
                  <p>date: {event.date}</p>
                  <p>site: {event.site}</p>
                  <p>
                    guests:{' '}
                    <span className="badge bg-design rounded-pill ms-auto">
                      {attends.length}
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
                  <button
                    type="button"
                    className={isAttending ? 'btn btn-success' : 'btn btn-info'}
                    onClick={onAttendClick}
                    disabled={isAttending}
                  >
                    {isAttending ? <>You are Attending</> : <>Attend Event</>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */
}
