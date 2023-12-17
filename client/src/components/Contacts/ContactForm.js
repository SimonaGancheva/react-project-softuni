export const ContactForm = () => {
    const onContactSubmit = (e) => {
        e.preventDefault();
        return alert("To be implemented!");
    };
    return (
        <form
                onSubmit={onContactSubmit}
                method="post"
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required=""
                      />

                      <label htmlFor="floatingInput">Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                      />

                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="subject"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required=""
                      />

                      <label htmlFor="floatingInput">Subject</label>
                    </div>

                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Tell me about the project"
                      ></textarea>

                      <label htmlFor="floatingTextarea">
                        Tell me about the project
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 ms-auto">
                    <button type="submit" className="form-control">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
    )
}