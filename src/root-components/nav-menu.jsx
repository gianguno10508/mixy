import { useQuery } from "@apollo/client";
import NAVBAR from "../graphql/navbar";

const Navbar = ({ location, isTitle }) => {
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
        <ul>
          {menus.map((e, i) => (
            <li key={i}>{e.node.label}</li>
          ))}
        </ul>
      </>
    );
  }
};
export default Navbar;
