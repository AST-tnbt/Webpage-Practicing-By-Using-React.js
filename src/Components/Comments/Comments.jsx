import "./Comments.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../Data/data";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Comments() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="comments" id="comments">
      <Slider {...settings}>
        {data.comments.map((comment, index) => {
          return (
            <div className="comment__box" key={index}>
              <p className="comment__text">
                <FaQuoteLeft />
                &nbsp;
                {comment.text}
                <span>
                  &nbsp;
                  <FaQuoteRight />
                </span>
              </p>
              <span className="comment__name">{comment.name}</span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
