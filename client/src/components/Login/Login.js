import { Link } from 'react-router-dom';
import { useCallback, useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import styles from './Login.module.css';

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);

  const initValues = {
    email: '',
    password: '',
  };
  const { values, onChangeHandler, onSubmit } = useForm(
    initValues,
    onLoginSubmit
  );

  const [errors, setErrors] = useState({
    requiredEmail: false,
    testEmail: false,
    requiredPassword: false,
    testPassword: false,
});

const onEmailBlur = useCallback(() => {
  const rgx = /^(.+)@(.+)$/;

  if (values.email === '') {
    setErrors((state) => ({
      ...state,
      requiredEmail: true,
      testEmail: false,
    }));
  } else if (!rgx.test(values.email)) {
    setErrors((state) => ({
      ...state,
      requiredEmail: false,
      testEmail: true,
    }));
  } else {
    setErrors((state) => ({
      ...state,
      requiredEmail: false,
      testEmail: false,
    }));
  }
}, [values]);


const onPasswordBlur = useCallback(() => {
  if (values.password === '') {
    setErrors((state) => ({
      ...state,
      requiredPassword: true,
      testPassword: false,
    }));
  } else if (values.password.length < 4) {
    setErrors((state) => ({
      ...state,
      requiredPassword: false,
      testPassword: true,
    }));
  } else {
    setErrors((state) => ({
      ...state,
      requiredPassword: false,
      testPassword: false,
    }));
  }
}, [values]);


  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className={styles.rowAlign}>
            <div className="col-lg-6 col-12">
              <h3 className="mb-4 pb-2">Login</h3>
            </div>

            <div className="col-lg-6">
              <form
                method="POST"
                onSubmit={onSubmit}
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  {/* Email */}
                  <div className="col-lg-12 col-md-6 col-12">
                  {errors.requiredEmail && (
                      <span className={styles.errors}>
                        This field is required!
                      </span>
                    )}
                    {errors.testEmail && (
                      <span className={styles.errors}>Enter valid email!</span>
                    )}
                    <div className="form-floating">
                      <input
                        value={values.email}
                        onChange={onChangeHandler}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        onBlur={onEmailBlur}
                      />

                      <label htmlFor="floatingInput">Email</label>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="col-lg-12 col-md-6 col-12">
                  {errors.requiredPassword && (
                      <span className={styles.errors}>
                        This field is required!
                      </span>
                    )}

                    {errors.testPassword && (
                      <span className={styles.errors}>
                        Password must be at least 4 characters long!
                      </span>
                    )}
                    <div className="form-floating">
                      <input
                        value={values.password}
                        onChange={onChangeHandler}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        onBlur={onPasswordBlur}
                      />

                      <label htmlFor="floatingInput">Password</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12 mx-auto">
                    <button type="submit" className="form-control">
                      Login
                    </button>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <span
                        className="col-lg-12 col-12"
                        htmlFor="form2Example3"
                      >
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: 'darkred' }}>
                          Register here!
                        </Link>
                      </span>
                    </div>
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

{
  /* <section className="section-padding section-bg" style={{backgroundColor: "#f0f8ff"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: 25 + "px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
      
                      <form className="mx-1 mx-md-4">
      
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>
      
            
                        
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor: '#80d0c7', borderRadius: 30 + 'px', paddingLeft: 50 + 'px', paddingRight: 50 + 'px', border: 'none'}}><strong>Login</strong></button>
                        </div>
      
                        <div className="form-check d-flex justify-content-center mb-5">
                          
                          <p className="form-check-label" htmlFor="form2Example3">
                           Don't have an account? <Link to="/register" style={{color: 'darkred'}}>Register here!</Link>
                          </p>
                        </div>
      
                      </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
