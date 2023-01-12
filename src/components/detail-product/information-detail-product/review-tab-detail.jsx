import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import REVIEW_PRODUCT from "../../../graphql/review-product";
import StarRating from "../../../root-components/star-rating";

const ReviewTabDetailProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [star, setStar] = useState();
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();


  const [review, { loading: reviewLoading, error: reviewError }] = useMutation(
    REVIEW_PRODUCT,
    {
      variables: {
        input: {
          rating: parseInt(star),
          status: 'APPROVE',
          content: `<h4>${title}</h4><p>${comment}</p>`,
          author: author,
          commentOn: 354
        },
      },
      onCompleted: (data) => {
        console.log(data);
      },
      onError: (error) => {
        if (error) {
          // setErrorMessage("Authentication failed.");
          console.log(error);
        }
      },
    }
  );
  const callback = (payload) => {
    setStar(payload);
  };
  
  const handleSubmitCommentProduct = async (event) => {
    event.preventDefault();
    review();
  };
  return (
    <div id="product_comments_block_tab" className="tab-pane">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-header flex-layout space-between center-vertical">
        <div className="rating_aggregate">
          <div className="star_content">
            <span className="rating_star"></span>
          </div>
          <span className="nb-comments">Based on 2 reviews</span>
        </div>
        <p
          style={{ cursor: "pointer" }}
          className="open-comment-form btn btn-secondary"
          id="new_comment_tab_btn"
          onClick={handleShow}
        >
          Write your review !
        </p>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div id="new_comment_form">
              <form id="id_new_comment_form" onSubmit={(event) => handleSubmitCommentProduct(event)}>
                <h2>Write your review</h2>
                <div className="row">
                  <div className="product">
                    <img
                      src="https://demo2.posthemes.com/pos_mixy/layout2/55-medium_default/sensations-thai-sweet-chilli-sharing-crisps.jpg"
                      alt="Sensations Thai Sweet Chilli Sharing Crisps"
                    />
                    <div className="product_desc">
                      <p className="product_name">
                        Sensations Thai Sweet Chilli Sharing Crisps
                      </p>
                    </div>
                  </div>
                  <div className="new_comment_form_content">
                    <div id="new_comment_form_error" className="error">
                      <ul></ul>
                    </div>
                    <ul id="criterions_list">
                      <li>
                        <label>Quality</label>
                        <div className="star_content">
                          <StarRating callback={callback} />
                        </div>
                      </li>
                    </ul>
                    <label for="comment_title">
                      Title for your review<sup className="required">*</sup>
                    </label>
                    <input
                      id="comment_title"
                      name="title"
                      className="form-control"
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>
                      Your name<sup className="required">*</sup>
                    </label>
                    <input
                      id="commentCustomerName"
                      className="form-control"
                      name="customer_name"
                      type="text"
                      onChange={(e) => setAuthor(e.target.value)}
                    />

                    <label for="content">
                      Your review<sup className="required">*</sup>
                    </label>
                    <textarea
                      id="content"
                      className="form-control"
                      name="content"
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <div id="new_comment_form_footer">
                      <input
                        id="id_product_comment_send"
                        className="form-control"
                        name="id_product"
                        type="hidden"
                      />
                      <p className=" required">
                        <sup>*</sup> Required fields
                      </p>
                      <p className="button_comment">
                        <button
                          type="button"
                          className="closefb btn btn-secondary"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={handleClose}
                        >
                          <span aria-hidden="true">Cancel</span>
                        </button>
                        <button
                          id="submitNewMessage"
                          className="btn btn-secondary"
                          name="submitMessage"
                          type="submit"
                        >
                          Send
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div className="reviews-content">
        <div className="comment clearfix">
          <div className="comment_author">
            <div className="star_content clearfix">
              <div className="star star_on"></div>
              <div className="star star_on"></div>
              <div className="star star_on"></div>
              <div className="star star_on"></div>
              <div className="star star_on"></div>
            </div>
            <div className="comment_author_infos">
              <span className="author-reviews">Rachel Neo</span>
              <span>On&nbsp;</span>
              <span>Nov 17, 2021</span>
            </div>
          </div>
          <div className="comment_details">
            <h4 className="title_block">Perfect for my size</h4>
            <p>
              I love the way you serve your customers, I hope you can keep this
              service as good as possible
            </p>
            <ul></ul>
          </div>
        </div>
        <div className="comment clearfix">
          <div className="comment_author">
            <div className="star_content clearfix">
              <div className="star star_on"></div>
              <div className="star star_on"></div>
              <div className="star star_on"></div>
              <div className="star star_on"></div>
              <div className="star star_on"></div>
            </div>
            <div className="comment_author_infos">
              <span className="author-reviews">Thomas Noah</span>
              <span>on&nbsp;</span>
              <span>Nov 17, 2021</span>
            </div>
          </div>
          <div className="comment_details">
            <h4 className="title_block">Fast shipping</h4>
            <p>
              Amazing !!! They delivered quickly my order, I received it within
              3 days. Good quality.
            </p>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewTabDetailProduct;
