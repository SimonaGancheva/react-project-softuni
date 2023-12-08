import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { EventContext } from '../../contexts/EventContext';
import { EventCard } from '../EventCard/EventCard';

export const UserProfile = () => {
  const { userId } = useContext(AuthContext);
  const { events } = useContext(EventContext);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    const currUserEvents = events.filter((x) => x._ownerId === userId);
    setUserEvents(currUserEvents);
  }, [events, userId]);

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
                {userEvents.map((x) => (
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
