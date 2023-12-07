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
  }, [events]);

  return (
    <>
      <div>this is the profile page</div>
      <div className="row">
        {userEvents.map((x) => (
          <EventCard key={x._id} {...x} />
        ))}
      </div>
    </>
  );
};
