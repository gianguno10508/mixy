import { useMutation } from "@apollo/client";
import { useState } from "react";
import UPDATE_ACCOUNT from "../../graphql/update-user";
import { isUserLoggedIn } from "../../untils/functions";

const AccountDetail = ({dataDetailAccount}) => {
  const auth = isUserLoggedIn();

  const [updateFields, setUpdateFields] = useState({
    email: "",
    firstname: "",
    lastname: "",
    description: "",
  });
  const [update, { loading: loginLoading, error: loginError }] = useMutation(
    UPDATE_ACCOUNT,
    {
      variables: {
        input: {
          id: auth.user.id,
          token: auth.authToken,
          email: updateFields.email,
          firstName: updateFields.firstname,
          lastName: updateFields.lastname,
          description: updateFields.description
        },
      },
      onCompleted: (data) => {
        console.log(data);
        // const { login } = data;
        // const authData = {
        //   authToken: login.authToken,
        //   user: login.user,
        // };
        // setAuth(authData);
        // props.setAuthRedux(authData);
        // navigate("/");
      },
      onError: (error) => {
        if (error) {
          console.log(error);
          //setErrorMessage("Authentication failed.");
        }
      },
    }
  );

  const handleOnChange = (event) => {
    setUpdateFields({ ...updateFields, [event.target.name]: event.target.value });
  };
  const handleSubmitUpdateAccount = (e) =>{
    e.preventDefault();
    update();
  }
  return (
    <div className="woocommerce-MyAccount-content">
      <div className="woocommerce-notices-wrapper"></div>
      <form className="woocommerce-EditAccountForm edit-account" onSubmit={handleSubmitUpdateAccount}>
        <legend>Account details</legend>
        <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
          <label htmlFor="account_first_name">
            First name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="firstname"
            id="account_first_name"
            onChange={handleOnChange}
            required
            placeholder={dataDetailAccount.firstName}
          />
        </p>
        <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
          <label htmlFor="account_last_name">
            Last name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="lastname"
            id="account_last_name"
            onChange={handleOnChange}
            required
            placeholder={dataDetailAccount.lastName}
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="account_email">
            Email address&nbsp;<span className="required">*</span>
          </label>
          <input
            type="email"
            className="woocommerce-Input woocommerce-Input--email input-text"
            name="email"
            id="account_email"
            onChange={handleOnChange}
            required
            placeholder={dataDetailAccount.email}
          />
        </p>
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="account_birthday">Birthday</label>
          <input
            type="date"
            className="woocommerce-Input woocommerce-Input--date input-text"
            name="description"
            id="account_birthday"
            onChange={handleOnChange}
          />
        </p>
        <button
          className="btn btn-primary form-control-submit float-xs-right"
          type="submit"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};
export default AccountDetail;
