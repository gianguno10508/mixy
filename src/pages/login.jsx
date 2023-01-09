import { useMutation } from "@apollo/client";
import { useState } from "react";
import LOGIN from "../graphql/login";
import "../assets/css/login-styles.css";
import cartSpinnerGif from "../assets/images/cart-spinner.gif";
import { Link, useNavigate } from "react-router-dom";
import { setAuth } from "../untils/functions";
import { connect } from "react-redux";
import { actSetAuth } from "../actions";



function Login(props) {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState();
  const [show, setShow] = useState("show");
  const navigate = useNavigate();
  
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
        const { login } = data;
        const authData = {
          authToken: login.authToken,
          user: login.user,
        };
        setAuth(authData);
        props.setAuthRedux(authData);
        navigate("/");
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
    login();
  };

  const handleShow = (event) => {
    if (show == "show") {
      setShow("hide");
    } else {
      setShow("show");
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
            <Link to="/create">No account? Create one here</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
      setAuthRedux: (data) => {
          dispatch(actSetAuth(data));
      }
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
      // datalifeStyle: state.dataLifeStyle,
      // dataUserLogin: state.dataUserLogin
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);  
