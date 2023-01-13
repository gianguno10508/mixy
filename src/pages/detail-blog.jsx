import { useQuery } from "@apollo/client";
import GET_DETAIL_POST from "../graphql/detail-post";
import "../assets/css/detail-post.css";
import BlogContent from "../components/detail-blog/blog-content";
import CommentArea from "../components/detail-blog/comment-area";
import FormCommentBlog from "../components/detail-blog/form-comment-blog";

function DetailBlog() {
  const url = window.location.href;

  const id_post = url.split("/").pop();

  const { loading, error, data } = useQuery(GET_DETAIL_POST, {
    variables: {
      idPost: id_post,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data)
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
