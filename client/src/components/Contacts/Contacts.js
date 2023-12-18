import { GetInTouch } from "../GetInTouch/GetInTouch";
import { ContactForm } from "./ContactForm";
import { Map } from "./Map";

export const Contacts = () => {
  return (
    <>
      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-4 pb-2">We'd love to hear from you</h3>
            </div>

            <div className="col-lg-6 col-12">
              <ContactForm />
            </div>

            <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
              <Map />

              <h5 className="mt-4 mb-2">EventAp Center</h5>

              <p>
                Paradise Center, Sofia, Bulgaria
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact-section section-padding section-bg"
        id="section_5"
      >
        <GetInTouch />
      </section>
    </>
  );
};
