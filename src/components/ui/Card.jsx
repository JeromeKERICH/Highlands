
import PropTypes from "prop-types";

const Card = ({ title, description, image, className = "" }) => {
  return (
    <div className={`shadow-md rounded-lg overflow-hidden ${className}`}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
