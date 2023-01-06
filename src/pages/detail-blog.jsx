function DetailBlog() {
  return (
    <div className="detail-post">
      <div className="container">
        <div className="comments_area" id="comments">
          <h2 className="comments_title">All comments</h2>
          <ol className="comment_list"></ol>
        </div>
        <div className="comment_respond clearfix m_bottom_50" id="respond">
          <h3 className="comment_reply_title" id="reply-title">
            Leave a Reply
          </h3>
          <form
            className="comment_form"
            action=""
            method="post"
            id="xipblogs_commentfrom"
            role="form"
            data-toggle="validator"
            novalidate="true"
          >
            <div className="form-group xipblogs_message"></div>
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
