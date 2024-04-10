import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const EstateCard = ({ card }) => {
  // console.log(card);
  const { image_url, segment_name, price, status, id } = card;
  return (
    <div className=" card mt-2 bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {segment_name}</h2>
        <p>
          <span className="font-display font-bold">Status:</span> {status}
        </p>
        <div className="card-actions">
          <p>
            <span className="font-display font-bold">Price:</span> {price}
          </p>
        </div>
        {
          <NavLink to={`/details/${id}`}>
            <button className="btn bg-orange-500 font-bold">
              View Property
            </button>
          </NavLink>
        }
      </div>
    </div>
  );
};

export default EstateCard;
EstateCard.propTypes = {
  card: PropTypes.object,
};
