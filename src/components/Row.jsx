import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";

import PropTypes from "prop-types";

const images = [img1, img2, img3, img4, img5, img6, img7];

function Row({ words, className = "" }) {
  return (
    <div
      className={`${className} row-track flex w-max items-center whitespace-nowrap`}
      data-word-row
    >
      {words.map((word, index) => (
        <div className="row-item" key={`${word}-${index}`}>
          <span className="row-word">{word}</span>
          {index < words.length - 1 && (
            <span className="row-image" data-row-image aria-hidden="true">
              <img src={images[(index + words.length) % images.length]} alt="" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

Row.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

export default Row;
