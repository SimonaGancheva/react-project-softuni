import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { EventContext } from '../../contexts/EventContext';
import * as attendService from '../../services/attendService';
import * as eventService from '../../services/eventService';

import { EventCard } from '../EventCard/EventCard';

export const UserProfile = () => {
  const { userId } = useContext(AuthContext);
  const { events } = useContext(EventContext);
  const [userEvents, setUserEvents] = useState([]);
  const [userAttendings, setUserAttendings] = useState([]);
  const [attendingsFullEvent, setAttendingsFullEvent] = useState([]);
  let userAttendingData = [];

  useEffect(() => {
    const currUserEvents = events.filter((x) => x._ownerId === userId);
    setUserEvents(currUserEvents);

    // const getData = async () => {
    //   if (userId) {
    //     const result = await attendService.getOwnAttendingEvents(userId);
    //     console.log(result);
    //     setUserAttendings(result);
    //     console.log(userAttendings);
    //   }
    // };
    // // TODO: show events user is attending here
    // getData();
    events.forEach((event) => {
      userAttendings.forEach((el) => {
        if (event._id === el.eventId) {
          userAttendingData.push(event);
        }
      });
    });

    console.log(userAttendingData);
  }, [events]);

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
                  <EventCard key={x.eventId} {...x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
