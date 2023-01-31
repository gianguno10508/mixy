import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RESET_PASSWORD from "../graphql/reset-password";
import SEND_RESET_PASSWORD from "../graphql/send-key-resetpass";

function ForgotPassword() {
  const [done, setDone] = useState();
  const [hide, setHide] = useState("appear");
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const [sendmailreset, { loading: loginLoading, error: loginError }] =
    useMutation(SEND_RESET_PASSWORD, {
      variables: {
        input: {
          username: email,
        },
      },
      onCompleted: (data) => {
        // navigate("/reset-pass");
      },
      onError: (error) => {
        if (error) {
          console.log(error);
        }
      },
    });
  const handleReset = (event) => {
    event.preventDefault();
    setDone("done");
    if (hide == "hide") {
      setHide("appear");
    } else {
      setHide("hide");
      sendmailreset();
    }
  };
  const handleSetMail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [resetFields, setResetFields] = useState({
    password: "",
    key: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  const [resetpass, { loading: resetLoading, error: resetError }] = useMutation(
    RESET_PASSWORD,
    {
      variables: {
        input: {
          login: email,
          password: resetFields.password,
          key: resetFields.key,
        },
      },
      onCompleted: (data) => {
        console.log(data);
        navigate("/");
      },
      onError: (error) => {
        if (error) {
          console.log(error);
          setErrorMessage("Authentication failed.");
        }
      },
    }
  );
  const handleResetMail = async (event) => {
    event.preventDefault();
    setErrorMessage();
    resetpass();
    console.log("asfd");
  };

  const handleOnChange = (event) => {
    setResetFields({ ...resetFields, [event.target.name]: event.target.value });
  };
  const { password, key } = resetFields;
  console.log(resetFields);
  return (
    <div className="forget-password page-customer-account">
      <div className="container">
        <section id="main">
          <section id="content" className="page-content card card-block">
            {done ? (
              <>
                <section className="login-form">
                  <form id="login" onSubmit={(event) => handleResetMail(event)}>
                    <section>
                      <div className="form-group row ">
                        <label className="col-md-3 form-control-label required">
                          Key
                        </label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            name="key"
                            type="text"
                            required
                            value={key}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
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
                          </div>
                        </div>
                      </div>
                    </section>
                    <button
                      id="submit-reset"
                      className="btn btn-primary"
                      type="submit"
                    >
                      Send request
                    </button>
                  </form>
                </section>
                <hr />
              </>
            ) : (
              <form className="forgotten-password" onSubmit={handleReset}>
                <ul className="ps-alert-error"></ul>
                <header>
                  <p className="send-renew-password-link">
                    Please enter the email address you used to register. You
                    will receive a temporary link to reset your password.
                  </p>
                </header>

                <section className="form-fields">
                  <div className="form-group center-email-fields">
                    <label className="col-md-3 form-control-label required">
                      Email address
                    </label>
                    <div className="col-md-5 email">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        onChange={handleSetMail}
                        value={email}
                        required
                      />
                    </div>
                    <button
                      className={`form-control-submit btn btn-primary hidden-xs-down ${hide}`}
                      name="submit"
                      type="submit"
                      //onClick={handleReset}
                    >
                      Send reset link
                    </button>
                    <button
                      className={`form-control-submit btn btn-primary hidden-xs-up ${hide}`}
                      name="submit"
                      type="submit"
                      //onClick={handleReset}
                    >
                      Send
                    </button>
                  </div>
                </section>
              </form>
            )}
          </section>

          <footer className="page-footer">
            <div className="section">
              <a href="/" className="account-link btn-primary">
                <i class="fa-solid fa-chevron-left"></i>
                <span> Back to login</span>
              </a>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default ForgotPassword;
