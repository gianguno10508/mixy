import { Markup } from "interweave";

const CommentArea = ({ data }) => {
  return (
    <div className="comments_area" id="comments">
      <h2 className="comments_title">All comments</h2>
      <ul className="comment_list">
        {data.comments.nodes.map((e, i) => (
          <>
            <li className="detail-comment" key={i}>
              <span className="author-comment">{e.author.node.name}</span>
              <span className="date-comment"> On {e.date}</span>
              <p className="email-comment">{e.author.node.email}</p>
              <p className="content-comment">
                <Markup content={e.content} />
              </p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
export default CommentArea;
