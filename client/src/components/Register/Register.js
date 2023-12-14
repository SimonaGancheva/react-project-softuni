import { Link } from 'react-router-dom';
import { useCallback, useContext, useState } from 'react';

import styles from './Register.module.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);

  const initValues = {
    username: '',
    email: '',
    password: '',
    repass: '',
  };
  const { values, onChangeHandler, onSubmit } = useForm(
    initValues,
    onRegisterSubmit
  );

  const [errors, setErrors] = useState({
    requiredUsername: false,
    testUsername: false,
    requiredEmail: false,
    testEmail: false,
    requiredPassword: false,
    testPassword: false,
    requiredRepeatPassword: false,
    testRepeatPassword: false,
  });

  const onUsernameBlur = useCallback(() => {
    if (values.username === '') {
      setErrors((state) => ({
        ...state,
        requiredUsername: true,
        testUsername: false,
      }));
    } else if (values.username.length < 3) {
      setErrors((state) => ({
        ...state,
        requiredUsername: false,
        testUsername: true,
      }));
    } else {
      setErrors((state) => ({
        ...state,
        requiredUsername: false,
        testUsername: false,
      }));
    }
  })

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

  const onRepeatPasswordBlur = useCallback(() => {
    if (values.repass === '') {
      setErrors((state) => ({
        ...state,
        requiredRepeatPassword: true,
        testRepeatPassword: false,
      }));
    } else if (values.password !== values.repass) {
      setErrors((state) => ({
        ...state,
        requiredRepeatPassword: false,
        testRepeatPassword: true,
      }));
    } else {
      setErrors((state) => ({
        ...state,
        requiredRepeatPassword: false,
        testRepeatPassword: false,
      }));
    }
  }, [values]);

  return (
    <section className="section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className={styles.rowAlign}>
            <div className="col-lg-6 col-12">
              <h3 className="mb-4 pb-2">Register</h3>
            </div>

            <div className="col-lg-6">
              <form
                onSubmit={onSubmit}
                method="POST"
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  {/* Username */}
                  <div className="col-lg-12 col-md-6 col-12">
                  {errors.requiredUsername && (
                      <span className={styles.errors}>
                        This field is required!
                      </span>
                    )}
                    {errors.testUsername && (
                      <span className={styles.errors}>Username must be at least 3 characters long!</span>
                    )}
                    <div className="form-floating">
                      <input
                        value={values.username}
                        onChange={onChangeHandler}
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        onBlur={onUsernameBlur}
                      />

                      <label htmlFor="floatingInput">Username</label>
                    </div>
                  </div>
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

                  {/* Repass */}
                  <div className="col-lg-12 col-md-6 col-12">
                    {errors.requiredRepeatPassword && (
                      <span className={styles.errors}>
                        This field is required!
                      </span>
                    )}
                    {errors.testRepeatPassword && (
                      <span className={styles.errors}>
                        Passwords don't match!
                      </span>
                    )}
                    <div className="form-floating">
                      <input
                        value={values.repass}
                        onChange={onChangeHandler}
                        type="password"
                        name="repass"
                        id="repass"
                        className="form-control"
                        placeholder="Repeat Password"
                        onBlur={onRepeatPasswordBlur}
                      />

                      <label htmlFor="floatingInput">Repeat Password</label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12 mx-auto">
                    <button type="submit" className="form-control">
                      Register
                    </button>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="form-floating">
                      <span
                        className="col-lg-12 col-12"
                        htmlFor="form2Example3"
                      >
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: 'darkred' }}>
                          Login here!
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
                    </div>
                  </div>

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

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor: '#80d0c7', borderRadius: 30 + 'px', paddingLeft: 50 + 'px', paddingRight: 50 + 'px', border: 'none'}}><strong>Register</strong></button>
                        </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    
                    <p className="form-check-label" htmlFor="form2Example3">
                      Already have an account? <Link to="/login" style={{color: 'darkred'}}>Login here!</Link>
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
