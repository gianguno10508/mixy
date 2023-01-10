import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import CREATE_COMMENT_POST from "../../graphql/comment-post";

const FormCommentBlog = ({ data }) => {
  const [commentFields, setCommentFields] = useState({
    author: "",
    content: "",
    email: "",
  });
  //   const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [comment_blog, { loading: createLoading, error: createError }] =
    useMutation(CREATE_COMMENT_POST, {
      variables: {
        input: {
          author: commentFields.author,
          authorEmail: commentFields.email,
          content: commentFields.content,
          commentOn: data.postId,
          status: "APPROVE",
        },
      },
      onCompleted: (data) => {
        setMessage("Thank you for your comment!");
      },
      onError: (error) => {
        if (error) {
          setMessage("Error please check again!");
        }
      },
    });
  const handleSubmitComment = async (event) => {
    event.preventDefault();
    comment_blog();
    event.target.reset();
  };

  const handleOnChange = (event) => {
    setCommentFields({
      ...commentFields,
      [event.target.name]: event.target.value,
    });
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const websiteRef = useRef(null);
  const subjectRef = useRef(null);
  const commentRef = useRef(null);



  return (
    <div className="comment_respond clearfix m_bottom_50" id="respond">
      <h3 className="comment_reply_title" id="reply-title">
        Leave a Reply
      </h3>
      <div className="status-post">
        <h2>{message}</h2>
      </div>
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
            name="author"
            className="form-control xipblog_name"
            required
            onChange={handleOnChange}
            ref={nameRef}
          />
        </div>
        <div className="form-group xipblog_email_parent">
          <label htmlFor="xipblog_email">Your Email:</label>
          <input
            type="email"
            id="xipblog_email"
            name="email"
            className="form-control xipblog_email"
            required
            onChange={handleOnChange}
            ref={emailRef}
          />
        </div>
        <div className="form-group xipblog_website_parent">
          <label htmlFor="xipblog_website">Website Url:</label>
          <input
            type="url"
            id="xipblog_website"
            name="website_url"
            className="form-control xipblog_website"
            ref={websiteRef}
          />
        </div>
        <div className="form-group xipblog_subject_parent">
          <label htmlFor="xipblog_subject">Subject:</label>
          <input
            type="text"
            id="xipblog_subject"
            name="subject"
            className="form-control xipblog_subject"
            required
            ref={subjectRef}
          />
        </div>
        <div className="form-group xipblog_content_parent">
          <label htmlFor="xipblog_content">Comment:</label>
          <textarea
            rows="15"
            cols=""
            id="xipblog_content"
            name="content"
            className="form-control xipblog_content"
            required
            onChange={handleOnChange}
            ref={commentRef}
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
  );
};
export default FormCommentBlog;
