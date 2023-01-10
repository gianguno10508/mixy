import { useState } from "react";

function ForgotPassword() {

  const [done, setDone] = useState();
  const [hide, setHide] = useState('appear');



  const handleReset = (event) =>{
    event.preventDefault();
    setDone('done');
    if(hide == 'hide'){
      setHide('appear');
    }else{
      setHide('hide');
    }
  }

  return (
    <div className="forget-password page-customer-account">
      <div className="container">
        <section id="main">
          <section id="content" className="page-content card card-block">
            {done && 
              <ul className="ps-alert-success">
                  <li className="item">
                  <i>
                    <svg viewBox="0 0 24 24">
                      <path fill="#fff" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                    </svg>
                  </i>
                  <p>If this email address has been registered in our shop, you will receive a link to reset your password at test@gmail.com.</p>
                </li>
              </ul>
            }
            <form
              className="forgotten-password"
              onSubmit={handleReset}
            >
              <ul className="ps-alert-error"></ul>
              <header>
                <p className="send-renew-password-link">
                  Please enter the email address you used to register. You will
                  receive a temporary link to reset your password.
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
          </section>

          <footer className="page-footer">
            <div className="section">
              <a
                href="/"
                className="account-link btn-primary"
              >
                <i className="material-icons"></i>
                <span>Back to login</span>
              </a>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default ForgotPassword;