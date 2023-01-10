import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import NAVBAR from "../graphql/navbar";

function convertToSlug(Text) {
  return Text.toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');
}
const Navbar = ({ location, isTitle, classUL }) => {
  const { loading, error, data } = useQuery(NAVBAR, {
    variables: {
      locate: location,
    },
  });
  var menus, title;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) {
    menus = data.menus.nodes[0].menuItems.edges;
    title = data.menus.nodes[0].name;
    return (
      <>
        {isTitle && <h3>{title}</h3>}
        <ul className={`${classUL}`}>
          {menus.map((e, i) => (
            <li key={i}><Link to={convertToSlug(e.node.label)}>{e.node.label}</Link></li>
          ))}
        </ul>
      </>
    );
  }
};
export default Navbar;
