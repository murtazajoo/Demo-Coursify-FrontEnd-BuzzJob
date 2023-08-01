import PropTypes from "prop-types";

export default function Benefit({ icon, title, des }) {
  return (
    <div className="w-full p-5 md:max-w-[250px] flex flex-col justify-center items-center text-center ">
      {icon}
      <h3 className="font-semibold text-xl my-2">{title}</h3>
      <p className="opacity-50">{des}</p>
    </div>
  );
}

Benefit.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};
