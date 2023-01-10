import { useNavigate } from "react-router-dom";
import MainAccount from "../components/my-account/main-account";
import { isUserLoggedIn } from "../untils/functions";

function MyAccount() {
  const auth = isUserLoggedIn();
  const navigate = useNavigate();
  return (
    auth !== null ? 
    <MainAccount auth={auth}/>
    :
    navigate('/')
  );
}
export default MyAccount;
