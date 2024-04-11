import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
const PropertyDetails = () => {
  const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  const estates = parseInt(id);
  const estateDetails = data.find(
    (estateDetails) => estateDetails.id === estates
  );

  const {
    area,
    description,
    estate_title,
    facilities,
    image_url,
    location,
    price,
    segment_name,
    status,
  } = estateDetails;
  return (
    <div>
      <div className="hero min-h-screen bg-slate-300 p-8 items-center">
        <div className="flex flex-row-reverse justify-between items-center bg-slate-200 p-6 rounded-md">
          <img src={image_url} className="w-[50%] rounded-lg shadow-2xl" />
          <div>
            <span className="bg-lime-400 ml-0  px-2 rounded-md">New</span>
            <h1 className="text-5xl mt-3  font-display font-bold">
              {segment_name}
            </h1>
            <p className="font-display mt-2 text-2xl">
              <span className="font-display  font-bold">Location:</span>{" "}
              {location}
            </p>
            <p className="font-display  text-2xl mt-2">
              <span className="font-bold font-display">Area:</span> {area}
            </p>
            <p className="font-display text-2xl mt-2">
              <span className="font-display font-bold">Price:</span> {price}
            </p>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-3xl">
                {estate_title}
              </h2>
            </div>

            <p className="font-display text-2xl mt-2">
              <span className="font-bold">Facilities:</span> {facilities[0]}
            </p>
            <p className="mt-2  font-display">
              <span className="font-bold">Description:</span> {description}
            </p>
            <p className="mt-2">
              {" "}
              <span className="bg-red-300 p-2 rounded-xl items-center">
                {status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
PropertyDetails.propTypes = {
  data: PropTypes.node,
};
