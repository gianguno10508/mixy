import { useQuery } from "@apollo/client";
import { Markup } from "interweave";
import GET_PAGE_ID from "../graphql/setting-page-static";
const PageStatic = ({id}) => {
  const { loading, error, data } = useQuery(GET_PAGE_ID, {
    variables: {
      idPage: id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return <Markup content={data.page.content} />;
};
export default PageStatic;
