import { useContext } from 'react';
import { EventCard } from '../EventCard/EventCard';
import { EventContext } from '../../contexts/EventContext';

import styles from './Catalog.module.css';

export const Catalog = () => {
  const { events } = useContext(EventContext);
  return (
    <section className="explore-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Browse Events</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div className="row">
                {!events.length && <div className={styles.noEvents}>No Events Added Yet :(</div> }
                {events.map((x) => (
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
