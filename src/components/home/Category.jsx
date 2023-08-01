import PropTypes from "prop-types";

export default function Category({ title, icon, number }) {
  return (
    <div className="min-h-[200px] mx-auto shadow-xl  rounded-2xl w-full max-w-[350px] flex justify-between flex-col p-5 hover:bg-slate-800  hover:text-white duration-700">
      <p className="flex justify-end  ">{icon}</p>
      <div>
        <h3 className="font-normal text-3xl my-3">{title}</h3>
        <p className="opacity-50 text-sm">New {number} Jobs Posted</p>
      </div>
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired,
};
