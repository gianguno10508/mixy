import { useMutation } from "@apollo/client";
import { useState } from "react";
import LOGIN from "../graphql/login";
import "../assets/css/login-styles.css";
import cartSpinnerGif from "../assets/images/cart-spinner.gif";

function Login() {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState();
  const [show, setShow] = useState("show");

  const [login, { loading: loginLoading, error: loginError }] = useMutation(
    LOGIN,
    {
      variables: {
        input: {
          username: loginFields.email,
          password: loginFields.password,
        },
      },
      onCompleted: (data) => {
        console.log(data);
        // If error.
        // if (!isEmpty(loginError)) {
        //   setErrorMessage(loginError.graphQLErrors[0].message);
        // }

        // const { login } = data;
        // const authData = {
        //   authToken: login.authToken,
        //   user: login.user,
        // };

        // setAuth(authData);
        // setLoggedIn(true);
      },
      onError: (error) => {
        if (error) {
          setErrorMessage("Authentication failed.");
        }
      },
    }
  );
  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage();
    // Login Mutation.
    login();
  };

  const handleShow = (event) => {
    if(show == 'show'){
      setShow('hide');
    }else{
      setShow('show');
    }
  };
  const handleOnChange = (event) => {
    setLoginFields({ ...loginFields, [event.target.name]: event.target.value });
  };
  const { email, password } = loginFields;
  return (
    <div className="page-customer-account">
      <div className="container">
        <section id="content" className="page-content card card-block">
          {errorMessage && (
            <div className="help-block">
              <ul>
                <li className="alert alert-danger">Authentication failed.</li>
              </ul>
            </div>
          )}
          <section className="login-form">
            <form id="login-form" onSubmit={(event) => handleLogin(event)}>
              <section>
                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Email
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Password
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      {show == "hide" ? (
                        <input
                          className="form-control js-child-focus js-visible-password"
                          name="password"
                          type="text"
                          pattern=".{5,}"
                          required
                          value={password}
                          onChange={handleOnChange}
                        />
                      ) : (
                        <input
                          className="form-control js-child-focus js-visible-password"
                          name="password"
                          type="password"
                          pattern=".{5,}"
                          required
                          value={password}
                          onChange={handleOnChange}
                        />
                      )}
                      <span className="input-group-btn">
                        <button
                          className="btn"
                          type="button"
                          data-action="show-password"
                          data-text-show="Show"
                          data-text-hide="Hide"
                          onClick={handleShow}
                        >
                          {show}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="forgot-password">
                  <a href="#" rel="nofollow">
                    Forgot your password?
                  </a>
                </div>
              </section>

              <footer className="form-footer text-sm-center clearfix">
                <input type="hidden" name="submitLogin" value="1" />
                <button
                  id="submit-login"
                  className="btn btn-primary"
                  data-link-action="sign-in"
                  type="submit"
                >
                  Sign in
                </button>
                {loginLoading && (
                  <img
                    className="woo-next-cart-item-spinner"
                    src={cartSpinnerGif}
                    alt="loading"
                  />
                )}
              </footer>
            </form>
          </section>
          <hr />
          <div className="no-account">
            <a
              href="https://demo2.posthemes.com/pos_mixy/layout2/en/login?create_account=1"
              data-link-action="display-register-form"
            >
              No account? Create one here
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Login;
