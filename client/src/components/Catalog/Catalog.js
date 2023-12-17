import { useContext, useState } from 'react';
import { EventCard } from '../EventCard/EventCard';
import { EventContext } from '../../contexts/EventContext';

import styles from './Catalog.module.css';

export const Catalog = () => {
  const { events, onCategoryClick } = useContext(EventContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const onCategory = (event) => {
    const category = event.target.value;
    setSelectedCategory(category)
    const filteredEvents = events.filter(
      (x) => x.category === category
    );

    setFilteredEvents(filteredEvents);
  };

  const onAllClick = () => {

    setFilteredEvents([]);
    setSelectedCategory('');
  }

  return (
    <section className="explore-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Browse Events</h2>
          </div>
        </div>
      </div>

      {/* <button onClick={onCategory} value="IT">
        IT
      </button>

      <button onClick={onCategory} value="Art">
        Art
      </button>

      <button onClick={() => setFilteredEvents([])}>All Events</button> */}

      <div className="container-fluid">
        <div className="row">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                onClick={onAllClick}
                className="nav-link active"
                id="all-tab"
                data-bs-toggle="tab"
                data-bs-target="#all-tab-pane"
                type="button"
                role="tab"
                aria-controls="all-tab-pane"
                aria-selected="true"
              >
                All Events
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={onCategory}
                value="IT"
                className="nav-link"
                id="it-tab"
                data-bs-toggle="tab"
                data-bs-target="#it-tab-pane"
                type="button"
                role="tab"
                aria-controls="it-tab-pane"
                aria-selected="false"
              >
                IT
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                onClick={onCategory}
                value="Art"
                className="nav-link"
                id="art-tab"
                data-bs-toggle="tab"
                data-bs-target="#art-tab-pane"
                type="button"
                role="tab"
                aria-controls="art-tab-pane"
                aria-selected="false"
              >
                Art
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                onClick={onCategory}
                value="Marketing"
                className="nav-link"
                id="marketing-tab"
                data-bs-toggle="tab"
                data-bs-target="#marketing-tab-pane"
                type="button"
                role="tab"
                aria-controls="marketing-tab-pane"
                aria-selected="false"
              >
                Marketing
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                onClick={onCategory}
                value="Entertainment"
                className="nav-link"
                id="entertainment-tab"
                data-bs-toggle="tab"
                data-bs-target="#entertainment-tab-pane"
                type="button"
                role="tab"
                aria-controls="entertainment-tab-pane"
                aria-selected="false"
              >
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div className="row">
                {!events.length && (
                  <div className={styles.noEvents}>No Events Added Yet :(</div>
                )}

                {!selectedCategory
                  ? events.map((x) => <EventCard key={x._id} {...x} />)
                  : filteredEvents.map((x) => <EventCard key={x._id} {...x} />)}
              </div>

              {selectedCategory && filteredEvents.length === 0 && <div className={styles.noEvents}>No Events Added in This Category Yet :(</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
