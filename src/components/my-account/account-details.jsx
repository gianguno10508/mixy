const AccountDetail = () => {
  return (
    <div className="woocommerce-MyAccount-content">
      <div className="woocommerce-notices-wrapper"></div>
      <form className="woocommerce-EditAccountForm edit-account">
        <legend>Account details</legend>
        <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
          <label htmlFor="account_first_name">
            First name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="account_first_name"
            id="account_first_name"
          />
        </p>
        <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
          <label htmlFor="account_last_name">
            Last name&nbsp;<span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="account_last_name"
            id="account_last_name"
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="account_email">
            Email address&nbsp;<span className="required">*</span>
          </label>
          <input
            type="email"
            className="woocommerce-Input woocommerce-Input--email input-text"
            name="account_email"
            id="account_email"
          />
        </p>
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="account_birthday">Birthday</label>
          <input
            type="date"
            className="woocommerce-Input woocommerce-Input--date input-text"
            name="account_birthday"
            id="account_birthday"
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
