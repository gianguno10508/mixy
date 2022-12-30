import { useQuery } from "@apollo/client";
import { Markup } from "interweave";
import POSTS from "../graphql/posts";
const Posts = () => {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);
  return (
    <div className="container">
       <Markup content={data.posts.nodes[0].content} />
    </div>
  )
};
export default Posts;
