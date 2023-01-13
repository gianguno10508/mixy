const ReviewStar = ({starNumber}) => {
    const list = [];
    if (starNumber > 0) {
      var starTotal = Math.floor(starNumber);
      for (let index = 0; index < starTotal; index++) {
        list.push(
          <li>
            <i class="fa-solid fa-star"></i>
          </li>
        );
      }
    }
    return(
        <ul>{list}</ul>
    )
}
export default ReviewStar;