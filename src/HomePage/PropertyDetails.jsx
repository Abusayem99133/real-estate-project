import { useLoaderData } from "react-router-dom";
const PropertyDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>hlw i am in details to here in your place</h1>
    </div>
  );
};

export default PropertyDetails;
