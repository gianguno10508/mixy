import { useQuery } from "@apollo/client";
import GET_DETAIL_POST from "../graphql/detail-post";
import { Markup } from "interweave";
import { Link } from "react-router-dom";
import "../assets/css/detail-post.css";

function DetailBlog() {
  const { loading, error, data } = useQuery(GET_DETAIL_POST, {
    variables: {
      idPage: "cG9zdDoxNDI=",
    },
  });

  const handleSubmitComment = () => {};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);
  return (
    <div className="detail-post">
      <div className="container">
        <div className="blog_post_content">
          <div className="blog_post_header">
            <h3 className="post_title">
              <Markup content={data.post.title} />
            </h3>
            <div className="post_meta">
              <p className="meta_author">
                Posted by <span>{data.post.author.node.name}</span>
              </p>
              <p className="meta_date">{data.post.date}</p>
              <p className="meta_category">
                <Link to="/">{data.post.categories.nodes[0].name}</Link>
              </p>
            </div>
          </div>
          <div className="blog_post_content_top">
            <div className="post_thumbnail">
              <img src={data.post.featuredImage.node.mediaItemUrl} alt="" />
            </div>
          </div>
          <div className="post_content">
            <Markup content={data.post.content} />
          </div>
        </div>
        <div className="comments_area" id="comments">
          <h2 className="comments_title">All comments</h2>
          <ul className="comment_list">
            {data.post.comments.nodes.map((e, i) => (
              <>
                <li>{e.author.node.name}</li>
                <li>{e.date}</li>
                <li><Markup content={e.content} /></li>
              </>
            ))}
          </ul>
        </div>
        <div className="comment_respond clearfix m_bottom_50" id="respond">
          <h3 className="comment_reply_title" id="reply-title">
            Leave a Reply
          </h3>
          <form
            className="comment_form"
            id="xipblogs_commentfrom"
            onSubmit={handleSubmitComment}
          >
            <div className="form-group xipblog_name_parent">
              <label htmlFor="xipblog_name">Your Name:</label>
              <input
                type="text"
                id="xipblog_name"
                name="xipblog_name"
                className="form-control xipblog_name"
                required
              />
            </div>
            <div className="form-group xipblog_email_parent">
              <label htmlFor="xipblog_email">Your Email:</label>
              <input
                type="email"
                id="xipblog_email"
                name="xipblog_email"
                className="form-control xipblog_email"
                required
              />
            </div>
            <div className="form-group xipblog_website_parent">
              <label htmlFor="xipblog_website">Website Url:</label>
              <input
                type="url"
                id="xipblog_website"
                name="xipblog_website"
                className="form-control xipblog_website"
              />
            </div>
            <div className="form-group xipblog_subject_parent">
              <label htmlFor="xipblog_subject">Subject:</label>
              <input
                type="text"
                id="xipblog_subject"
                name="xipblog_subject"
                className="form-control xipblog_subject"
                required
              />
            </div>
            <div className="form-group xipblog_content_parent">
              <label htmlFor="xipblog_content">Comment:</label>
              <textarea
                rows="15"
                cols=""
                id="xipblog_content"
                name="xipblog_content"
                className="form-control xipblog_content"
                required
              ></textarea>
            </div>
            <button
              className="btn btn-primary form-control-submit float-xs-right"
              type="submit"
            >
              Submit button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default DetailBlog;
