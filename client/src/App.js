import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { Catalog } from './components/Catalog/Catalog';
import { Contacts } from './components/Contacts/Contacts';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { EventDetails } from './components/EventDetails/EventDetails';
import { CreateEvent } from './components/CreateEvent/CreateEvent';
import { Logout } from './components/Logout/Logout';
import { UserProfile } from './components/UserProfile/UserProfile';
import { EditEvent } from './components/EditEvent/EditEvent';
import { EventProvider } from './contexts/EventContext';
import { AttendProvider } from './contexts/AttendContext';
import { AuthGuard } from './components/Guards/AuthGuard';
import { NotFound } from './components/NotFound/NotFound';
import { PublicGuard } from './components/Guards/PublicGuard';
import { EventOwner } from './components/Guards/EventOwner';

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <AttendProvider>
        <main>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:eventId" element={<EventDetails />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route element={<PublicGuard />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<CreateEvent />} />

              <Route
                path="/catalog/:eventId/edit"
                element={
                  <EventOwner>
                    <EditEvent />
                  </EventOwner>
                }
              />

              <Route path="/profile" element={<UserProfile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* <section className="faq-section section-padding" id="section_4">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <h2 className="mb-4">Frequently Asked Questions</h2>
                        </div>

                        <div className="clearfix"></div>

                        <div className="col-lg-5 col-12">
                            <img src="images/faq_graphic.jpg" className="img-fluid" alt="FAQs" />
                        </div>

                        <div className="col-lg-6 col-12 m-auto">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is Topic Listing?
                                        </button>
                                    </h2>

                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Topic Listing is free Bootstrap 5 CSS template. <strong>You are not allowed to redistribute this template</strong> on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How to find a topic?
                                    </button>
                                    </h2>

                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            You can search on Google with <strong>keywords</strong> such as templatemo portfolio, templatemo one-page layouts, photography, digital marketing, etc.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Does it need to paid?
                                    </button>
                                    </h2>

                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
        </main>

        <Footer />
        </AttendProvider>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;
