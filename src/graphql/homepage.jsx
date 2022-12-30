import { gql } from "@apollo/client";

const HOMEPAGE = gql`
  query HOMEPAGE {
    page(id: "cG9zdDo2MQ==") {
      id
      title
      slug
      homepage {
        banner {
          description
          fieldGroupName
          isSlider
          price
          subTitle
          title
        }
      }
    }
  }
`;
export default HOMEPAGE;
