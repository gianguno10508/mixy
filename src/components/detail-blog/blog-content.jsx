import { Markup } from "interweave";
import { Link } from "react-router-dom";

const BlogContent = ({data}) => {
  return (
    <div className="blog_post_content">
      <div className="blog_post_header">
        <h3 className="post_title">
          <Markup content={data.title} />
        </h3>
        <div className="post_meta">
          <p className="meta_author">
            Posted by <span>{data.author.node.name}</span>
          </p>
          <p className="meta_date">{data.date}</p>
          <p className="meta_category">
            <Link to="/">{data.categories.nodes[0].name}</Link>
          </p>
        </div>
      </div>
      <div className="blog_post_content_top">
        <div className="post_thumbnail">
          <img src={data.featuredImage.node.mediaItemUrl} alt="" />
        </div>
      </div>
      <div className="post_content">
        <Markup content={data.content} />
      </div>
    </div>
  );
};
export default BlogContent;
