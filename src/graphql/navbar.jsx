import { gql } from "@apollo/client";

const NAVBAR = gql`
query NAVBAR ( $locate: MenuLocationEnum! ){
    menus(where: {location: $locate}) {
        nodes {
            id
            name
            menuItems {
              edges {
                node {
                  id
                  label
                  parentId
                }
              }
            }
            locations
        }
    }
}
`;
export default NAVBAR;