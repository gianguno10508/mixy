import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AccountDetail from "./account-details";
import DetailsOrders from "./detail-orders";
import "../../assets/css/account.css";
import ChangePassword from "./changepassword";
import { logOut } from "../../untils/functions";
import { connect } from "react-redux";
import { actSetAuth } from "../../actions";

const MainAccount = (props) => {
  const data = [];
  const auth = props.auth;
  const handleLogout = () => {
    props.setAuthRedux(data);
    logOut();
  };
  return (
    <div className="page-account">
      <div className="container">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="content" className="site-content">
              <article className="page type-page status-publish hentry">
                <div className="entry-content">
                  <Tabs className="row">
                    <div className="col-left col-md-4">
                      <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>Orders</Tab>
                        <Tab>Change password</Tab>
                        <Tab>Account details</Tab>
                        <li onClick={handleLogout}>
                          <Link to="/">Logout</Link>
                        </li>
                        {/* <Tab>Logout</Tab> */}
                      </TabList>
                    </div>
                    <div className="col-md-8">
                      <TabPanel>
                        <p className="content-dashboard">
                          Hello
                          <strong>
                            {" "}
                            {auth.user.firstName} {auth.user.lastName}
                          </strong>
                          (not
                          <strong>
                            {" "}
                            {auth.user.firstName} {auth.user.lastName}
                          </strong>
                          ?
                          <Link onClick={handleLogout} to="/">
                            Log out
                          </Link>
                          )
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatibus asperiores accusamus, sit
                          repudiandae ea, odit amet perspiciatis reprehenderit
                          debitis id officiis suscipit cupiditate officia
                          quibusdam, magni quo! Vero, blanditiis itaque.
                        </p>
                      </TabPanel>
                      <TabPanel>
                        <DetailsOrders />
                      </TabPanel>
                      <TabPanel>
                        <ChangePassword />
                      </TabPanel>
                      <TabPanel>
                        <AccountDetail dataDetailAccount={auth.user} />
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthRedux: (data) => {
      dispatch(actSetAuth(data));
    },
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    dataUserLogin: state.userAuth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainAccount);
