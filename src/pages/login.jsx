import { useMutation } from "@apollo/client";
import { useState } from "react";
import LOGIN from "../graphql/login";

function Login() {
  const [loginFields, setLoginFields] = useState({
    email: "",
    password: "",
  });
  const [login, { loading: loginLoading, error: loginError }] = useMutation(
    LOGIN,
    {
      variables: {
        input: {
          email: loginFields.email,
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
          // if (!isEmpty(error)) {
          //   setErrorMessage(error.graphQLErrors[0].message);
          // }
          console.log(error);
        }
      },
    }
  );
  const handleLogin = async (event) => {
    event.preventDefault();

    // Login Mutation.
    login();
  };

  const handleOnChange = (event) => {
    setLoginFields({ ...loginFields, [event.target.name]: event.target.value });
  };
  const { email, password } = loginFields;
  return (
    <section id="content" className="page-content card card-block">
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
                  <input
                    className="form-control js-child-focus js-visible-password"
                    name="password"
                    type="password"
                    pattern=".{5,}"
                    required
                    value={password}
                    onChange={handleOnChange}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn"
                      type="button"
                      data-action="show-password"
                      data-text-show="Show"
                      data-text-hide="Hide"
                    >
                      Hide
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
          </footer>
        </form>
      </section>
      <div className="no-account">
        <a
          href="https://demo2.posthemes.com/pos_mixy/layout2/en/login?create_account=1"
          data-link-action="display-register-form"
        >
          No account? Create one here
        </a>
      </div>
    </section>
  );
}
export default Login;
