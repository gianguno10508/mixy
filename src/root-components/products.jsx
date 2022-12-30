import { useQuery } from "@apollo/client";
import PRODUCTS from "../graphql/products";
const Products = () => {
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);
  return (
    <p>asddfgd</p>
  )
};

export default Products;
