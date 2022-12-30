import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import BannerHomepage from "../components/homepage/banner-homepage";
import HOMEPAGE from "../graphql/homepage";
const Homepage = () => {
  const { loading, error, data } = useQuery(HOMEPAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) {
    return (
        <>
          <p>asfdf</p>
          <BannerHomepage banner={data.page.homepage.banner} />
        </>
      );
    }
};
export default Homepage;
