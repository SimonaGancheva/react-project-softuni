import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { EventContext } from '../../contexts/EventContext';
import * as attendService from '../../services/attendService';
import * as eventService from '../../services/eventService';

import { EventCard } from '../EventCard/EventCard';
import { AttendContext } from '../../contexts/AttendContext';

export const UserProfile = () => {
  const { getUserAttendings } = useContext(AttendContext);
  const { userId } = useContext(AuthContext);
  const { events, getEvent } = useContext(EventContext);

  const [userEvents, setUserEvents] = useState([]);
  const [userAttendings, setUserAttendings] = useState([]);

  useEffect(() => {
    const currUserEvents = events.filter((x) => x._ownerId === userId);
    setUserEvents(currUserEvents);

    getUserAttendings(userId)
      .then((result) => {
        for (const el of result) {
          const currEvent = getEvent(el.eventId);

          const currEventId = currEvent._id;
          // console.log(currEventId);

          setUserAttendings((state) =>
            !state.includes(currEventId) ? [...state, currEvent] : state
          );
        }
      })
      .catch((err) => console.log(err));
  }, [userId, events]);

  return (
    <section className="explore-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">My Events</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div className="row">
                {userEvents.map((x) => (
                  <EventCard key={x._id} {...x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">I Am Going To</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div className="row">
                {/* TODO: show events the curr user is attending */}

                {userAttendings.map((x) => (
                  <EventCard key={x._id} {...x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
