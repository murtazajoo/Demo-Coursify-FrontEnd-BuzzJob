import PropTypes from "prop-types";

export default function Step({ image, name, description }) {
  return (
    <div className="p-5 text-center w-full max-w-[400px]">
      <img src={image} className="m-auto" alt="" />
      <h2 className="font-medium text-2xl my-2">{name}</h2>
      <p className="opacity-50 text-sm px-8">{description}</p>
    </div>
  );
}

Step.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
