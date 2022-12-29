import { gql } from "@apollo/client";

const GET_PAGE_ID = gql`
query BaseSettingPage ( $idPage: ID! ){
  page(id: $idPage) {
    id
    title
    content
  }
}
`;
export default GET_PAGE_ID;