import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';

import * as eventService from '../../services/eventService';

import styles from './EditEvent.module.css';
import { useParams } from 'react-router-dom';
import { EventContext } from '../../contexts/EventContext';

export const EditEvent = () => {
  const { onEditEventSubmit } = useContext(EventContext);
  const { eventId } = useParams();
  const initValues = useState({
    _id: '',
    title: '',
    category: '',
    site: '',
    imageUrl: '',
    summary: '',
    date: '',
    maxGuests: '',
  });

  const { values, onChangeHandler, onSubmit, changeValues } = useForm(
    initValues,
    onEditEventSubmit
  );

  useEffect(() => {
    eventService.getById(eventId).then((res) => {
      changeValues(res);
    });
  }, [eventId]);
  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className={styles.rowAlign}>
            <div className="col-lg-6 col-12">
              <h3 className="mb-4 pb-2">Edit Event</h3>
            </div>

            <div className="col-lg-6">
              <form
                onSubmit={onSubmit}
                method="POST"
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        value={values.title}
                        onChange={onChangeHandler}
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        placeholder="Title"
                        required=""
                      />

                      <label htmlFor="floatingInput">Title</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6 col-12">
                    <div className="form-floating">
                      <select
                        value={values.category}
                        onChange={onChangeHandler}
                        id="floatingInput"
                        name="floatingInput"
                        className="form-control"
                        placeholder="Category"
                        required=""
                      >
                        {/* <option hidden disabled selected value></option> */}
                        <option value="it">IT</option>
                        <option value="marketing">Marketing</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="art-and-culture">Art and Culture</option>
                      </select>

                      <label htmlFor="floatingInput">Category</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6 col-12">
                    <div className="form-floating">
                      <select
                        value={values.site}
                        onChange={onChangeHandler}
                        id="floatingInput"
                        name="floatingInput"
                        className="form-control"
                        placeholder="Site"
                        required=""
                      >
                        {/* <option hidden disabled selected value></option> */}
                        <option value="on-site">On Site</option>
                        <option value="virtual">Virtual</option>
                      </select>

                      <label htmlFor="floatingInput">Site</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        value={values.date}
                        onChange={onChangeHandler}
                        type="date"
                        name="date"
                        id="name"
                        className="form-control"
                        placeholder="Date"
                        required=""
                      />

                      <label htmlFor="floatingInput">Date</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        value={values.maxGuests}
                        onChange={onChangeHandler}
                        type="number"
                        name="maxGuests"
                        id="name"
                        className="form-control"
                        placeholder="Maximum Guests"
                        required=""
                      />

                      <label htmlFor="floatingInput">Maximum Guests</label>
                    </div>

                    <div className="form-floating">
                      <textarea
                        value={values.summary}
                        onChange={onChangeHandler}
                        className="form-control"
                        id="summary"
                        name="summary"
                        placeholder="Tell us about the event"
                      ></textarea>

                      <label htmlFor="floatingTextarea">
                        Tell us about the event
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        value={values.imageUrl}
                        onChange={onChangeHandler}
                        type="text"
                        name="imageUrl"
                        id="name"
                        className="form-control"
                        placeholder="Image"
                        // pattern="https?:\/\/.*"
                        required=""
                      />

                      <label htmlFor="floatingInput">Image URL</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12 mx-auto">
                    <button type="submit" className="form-control">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                            <iframe className="google-map map-style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            <h5 className="mt-4 mb-2">Topic Listing Center</h5>

                            <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
