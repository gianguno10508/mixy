import { useQuery } from "@apollo/client";
import GET_DETAIL_POST from "../graphql/detail-post";
import "../assets/css/detail-post.css";
import BlogContent from "../components/detail-blog/blog-content";
import CommentArea from "../components/detail-blog/comment-area";
import FormCommentBlog from "../components/detail-blog/form-comment-blog";

function DetailBlog() {
  const { loading, error, data } = useQuery(GET_DETAIL_POST, {
    variables: {
      idPost: "cG9zdDoxNDI=",
    },
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);
  return (
    <div className="detail-post">
      <div className="container">
        <BlogContent data={data.post} />
        <CommentArea data={data.post} />
        <FormCommentBlog data={data.post}/>
      </div>
    </div>
  );
}
export default DetailBlog;
